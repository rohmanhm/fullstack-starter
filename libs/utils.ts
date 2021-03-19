import { firebaseAdmin } from '@/libs/firebase-admin'
import { NextApiRequest } from 'next'
import nookies from 'nookies'

export const getUserToken = (req: NextApiRequest) => {
  let token = ''
  const authorization = req.headers.authorization
  if (authorization) {
    const [, bearerToken] = authorization.split('Bearer ')
    token = bearerToken
  } else {
    const cookies = nookies.get({ req })
    token = cookies?.token
  }

  return token
}

export const getUser = async (req: NextApiRequest) => {
  const token = getUserToken(req)
  const user = await firebaseAdmin.auth().verifyIdToken(token)
  return user
}
