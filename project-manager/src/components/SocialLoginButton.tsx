import { OAuthStrategy } from '@clerk/types'
import { useSignIn } from '@clerk/react-router'
import { OAuthConfig, AttemptFirstFactorParams } from '@clerk/types'

const config: OAuthConfig = {
  redirectUrl: '/dashboard',
  actionCompleteRedirectUrl: '/',
  strategy: 'oauth_google',
}

const firstFactor: AttemptFirstFactorParams = {
  strategy: 'passkey', 
  publicKeyCredential: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
}

export default function GoogleLoginButton() {
  const { signIn, setActive } = useSignIn()

  if (!signIn) return null

  const signInWith = async (strategy: OAuthStrategy) => {
    await signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: '/dashboard',
      redirectUrlComplete: '/',
    })
    await signIn.prepareFirstFactor(config)
    await signIn.attemptFirstFactor(firstFactor)
    if(signIn.firstFactorVerification.message) console.log(signIn.firstFactorVerification.message)
  }

  return (
    <button onClick={() => signInWith('oauth_google')} className="w-28 h-14 rounded-full border border-slate-200 flex items-center justify-center">
    <img
      src="src/assets/google-logo-colored.svg"
      alt=""
    />
    </button>
  )
}

export function FacebookLoginButton() {
  const { signIn } = useSignIn()

  if (!signIn) return null

  const signInWith = (strategy: OAuthStrategy) => {
    return signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: '/dashboard',
      redirectUrlComplete: '/',
    })
  }

  // Render a button for each supported OAuth provider
  // you want to add to your app. This example uses only Google.
  return (
    <button onClick={() => signInWith('oauth_facebook')} className="w-28 h-14 rounded-full border border-slate-200 flex items-center justify-center">
    <img
      src="src/assets/facebook-logo-colored.svg"
      alt=""
    />
    </button>
  )
}