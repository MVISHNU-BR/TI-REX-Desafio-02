import { OAuthStrategy } from "@clerk/types";
import { useSignIn } from "@clerk/clerk-react";

export default function GoogleLoginButton() {
  const { signIn } = useSignIn();

  if (!signIn) return null;

  const signInWith = async () => {
    try {
      // Inicia o fluxo de autenticação com redirecionamento
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google" as OAuthStrategy,
        redirectUrl: "/register",
        redirectUrlComplete: "/dashboard",
      });
    } catch (error) {
      console.error("Erro ao autenticar com Google: ", error);
    }
  };

  return (
    <button
      onClick={() => signInWith()}
      className="w-28 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:border-azul-hover"
    >
      <img src="src/assets/google-logo-colored.svg" alt="Google Logo" />
    </button>
  );
}

export function FacebookLoginButton() {
  const { signIn } = useSignIn();

  if (!signIn) return null;

  const signInWith = async () => {
    try {
      // Inicia o fluxo de autenticação com redirecionamento
      await signIn.authenticateWithRedirect({
        strategy: "oauth_facebook" as OAuthStrategy,
        redirectUrl: "/register",
        redirectUrlComplete: "/dashboard",
      });
    } catch (error) {
      console.error("Erro ao autenticar com Facebook: ", error);
    }
  };

  return (
    <button
      onClick={() => signInWith()}
      className="w-28 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:border-azul-hover"
    >
      <img src="src/assets/facebook-logo-colored.svg" alt="Facebook Logo" />
    </button>
  );
}
