import { useSession, useSignIn } from "@clerk/react-router";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Dashboard() {
	const { signIn, setActive } = useSignIn();
	const { session } = useSession();

	useEffect(() => {
		console.log(signIn)

	}, [session, signIn, setActive]);
	if (!session) return <p>Carregando...</p>;

	return <p>Bem-vindo, você está logado!</p>;
}
