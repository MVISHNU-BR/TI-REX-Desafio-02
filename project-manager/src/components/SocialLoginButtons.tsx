import { signInWithFacebook, signInWithGoogle } from "../lib/supabase";

export function FacebookButton() {

	return (
		<button
			className="w-28 h-14 rounded-full border border-slate-200 flex items-center justify-center"
			onClick={signInWithFacebook}
		>
			<img src="src/assets/facebook-logo-colored.svg" alt="" />
		</button>
	);
};

export function GoogleButton() {

	return (
		<button
			className="w-28 h-14 rounded-full border border-slate-200 flex items-center justify-center"
			onClick={signInWithGoogle}
		>
			<img src="src/assets/google-logo-colored.svg" alt="" />
		</button>
	);
};