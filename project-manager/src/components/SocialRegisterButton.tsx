import { OAuthStrategy } from "@clerk/types";
import { useSignUp } from "@clerk/clerk-react";

export default function GoogleLoginButton() {
  const { signUp } = useSignUp();

  if (!signUp) return null;

  const signInWith = async () => {
    try {
      await signUp.authenticateWithRedirect({
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
      className="w-28 h-14 rounded-full border border-slate-200 flex items-center justify-center"
    >
      <img src="src/assets/google-logo-colored.svg" alt="Google Logo" />
    </button>
  );
}

export function FacebookLoginButton() {
  const { signUp } = useSignUp();

  if (!signUp) return null;

  const signInWith = async () => {
    try {
      // Inicia o fluxo de autenticação com redirecionamento
      await signUp.authenticateWithRedirect({
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
      className="w-28 h-14 rounded-full border border-slate-200 flex items-center justify-center"
    >
      <img src="src/assets/facebook-logo-colored.svg" alt="Facebook Logo" />
    </button>
  );
}
