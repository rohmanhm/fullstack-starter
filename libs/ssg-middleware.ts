import { AuthToken } from '@/libs/auth'
import { firebaseAdmin } from '@/libs/firebase-admin'
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  InferGetServerSidePropsType,
} from 'next'
import nookies from 'nookies'

export const checkUserToken = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx)
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)
    return token
  } catch (err) {
    return null
  }
}

export type MustAuthReturnProps = { user?: AuthToken | null }
export function mustAuth(
  fn?:
    | null
    | ((
        ctx: GetServerSidePropsContext,
        userToken?: firebaseAdmin.auth.DecodedIdToken | null
      ) => Promise<GetServerSidePropsResult<MustAuthReturnProps>>),
  options?: { disableRedirect?: boolean }
): GetServerSideProps<MustAuthReturnProps> {
  return async function (ctx: GetServerSidePropsContext) {
    try {
      const userToken = await checkUserToken(ctx)

      if (!userToken && !options?.disableRedirect) {
        throw userToken
      }

      return fn ? fn(ctx, userToken) : { props: { user: userToken } }
    } catch (err) {
      return {
        redirect: {
          permanent: false,
          destination: '/login',
        },
        props: {} as never,
      }
    }
  }
}
export type MustAuthProps = InferGetServerSidePropsType<
  ReturnType<typeof mustAuth>
>

export function mustUnauth<P>(
  fn?: (ctx: GetServerSidePropsContext) => Promise<GetServerSidePropsResult<P>>
) {
  return async function (ctx: GetServerSidePropsContext) {
    try {
      const userToken = await checkUserToken(ctx)
      if (userToken) {
        throw userToken
      }

      return fn ? fn(ctx) : { props: {} }
    } catch (err) {
      return {
        redirect: {
          permanent: false,
          destination: '/',
        },
        props: {} as never,
      }
    }
  }
}
