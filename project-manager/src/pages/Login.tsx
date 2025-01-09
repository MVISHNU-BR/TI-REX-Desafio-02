// TODO: adicionar componente separado para os botões
import Header from "../components/Header";
import FormField from "../components/FormField";
import { useSignIn } from "@clerk/react-router";
import { useState } from 'react';

export default function Login() {

	  // Estados para email/senha e mensagens de erro
		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');
		const [error, setError] = useState('');

		const { signIn, isLoaded } = useSignIn();


		  // Função para autenticar com email/senha
			const handleEmailPasswordLogin = async (e) => {
				e.preventDefault();
				setError(''); // Limpa mensagens de erro
		
				if (!isLoaded) return;
		
				try {
					await signIn.create({
						identifier: email,
						password,
					});
					// Redirecionar para o dashboard ou outra página após login bem-sucedido
					window.location.href = '/dashboard';
				} catch (err) {
					setError('Erro ao autenticar. Verifique suas credenciais.');
				}
			};
		
			// Função para autenticar com provedores sociais
			// const handleOAuthLogin = async (provider) => {
			// 	if (!isLoaded) return;
		
			// 	try {
			// 		await signIn.authenticateWithRedirect({
			// 			strategy: `oauth_${provider}`, // Estratégia do provedor
			// 			redirectUrl: '/dashboard', // Página para redirecionar após login
			// 			redirectUrlComplete: '/dashboard', // Opcional
			// 		});
			// 	} catch (err) {
			// 		setError(`Erro ao autenticar com ${provider}.`);
			// 	}
			// };

	return (
    <>
    <Header />
			<section className="">
				<div className="bg-[url('src/assets/login-bg-phone.png')] bg-no-repeat bg-cover bg-center py-9 px-5 min-h-screen flex items-center justify-center sm:py-36 sm:px-11 lg:bg-none lg:p-0 lg:flex lg:h-full ">

					<div className="hidden lg:block self-stretch max-w-[626px] w-full lg:bg-[url('src/assets/login-desktop.png')] bg-no-repeat bg-cover bg-center">
        		{/* <img src="src/assets/login-desktop.png" alt="" className="hidden lg:block lg:h-full object-cover " /> */}
					</div>
					<main className="w-full bg-white rounded-3xl py-14 px-3 sm:px-16 lg:pt-11 lg:pb-12 lg:px-32">
						<h1 className=" text-center text-vinho text-2xl font-bold mb-6 leading-loose sm:text-left sm:text-4xl">
							Login Information
						</h1>
						<p className="text-center sm:text-left text-vinho text-base">
							Enter your credentials
						</p>
						<p className="text-center sm:text-left text-vinho text-base mb-10">
							New here? Let's take you to{" "}
							<a
								href="/signup"
								className="text-roxo-claro font-bold"
							>
								sign up
							</a>
						</p>
						<form action="" onSubmit={handleEmailPasswordLogin}>
							{/* <FormField
								htmlFor="email"
								inputType="email"
								labelText="Email"
								placeholder="Enter your email"
								className="mb-6"
							/> */}
							<label htmlFor="email">Email</label>
							<input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
							<label htmlFor="password">password</label>
							<input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
							{/* <FormField
								htmlFor="password"
								inputType="password"
								labelText="Password"
								placeholder="Enter your password"
								className="mb-11"
							/> */}
							<button className="mb-10 sm:mb-7" type="submit">Login</button>
						</form>
						<p className="text-center text-vinho text-base leading-6 mb-2">
							or sign in with...
						</p>
						<div className="w-full flex justify-center gap-3">
							<button className="w-28 h-14 rounded-full border border-slate-200 flex items-center justify-center">
								<img
									src="src/assets/facebook-logo-colored.svg"
									alt=""
								/>
							</button>
							<button className="w-28 h-14 rounded-full border border-slate-200 flex items-center justify-center">
								<img
									src="src/assets/google-logo-colored.svg"
									alt=""
								/>
							</button>
						</div>
					</main>
				</div>
			</section>
		</>
	);
}
