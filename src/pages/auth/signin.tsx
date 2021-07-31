import { NextPage, NextPageContext } from 'next'
import { getCsrfToken, getProviders, signIn } from 'next-auth/client'

const SignIn: NextPage<{ providers: typeof getProviders; csrfToken: string }> =
  ({ csrfToken, providers = {} }) => {
    return (
      <>
        <pre>{JSON.stringify(providers, null, 2)}</pre>
        <div>
          <form method="post" action="/api/auth/callback/credentials">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
              Username
              <input name="username" type="text" />
            </label>
            <label>
              Password
              <input name="password" type="password" />
            </label>
            <button type="submit">Sign in</button>
          </form>
        </div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </>
    )
  }

export async function getServerSideProps(context: NextPageContext) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)

  return {
    props: { providers, csrfToken },
  }
}

export default SignIn
