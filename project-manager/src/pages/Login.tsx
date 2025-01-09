// TODO: adicionar componente separado para os botões
import Header from "../components/Header";
import FormField from "../components/FormField";
import { FacebookButton, GoogleButton } from "../components/SocialLoginButtons";

export default function Login() {

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
						<form action="">
							<FormField
								htmlFor="email"
								inputType="email"
								labelText="Email"
								placeholder="Enter your email"
								className="mb-6"
							/>
							<FormField
								htmlFor="password"
								inputType="password"
								labelText="Password"
								placeholder="Enter your password"
								className="mb-11"
							/>
							<button className="mb-10 sm:mb-7">Login</button>
						</form>
						<p className="text-center text-vinho text-base leading-6 mb-2">
							or sign in with...
						</p>
						<div className="w-full flex justify-center gap-3">
							<FacebookButton />
							<GoogleButton />
						</div>
					</main>
				</div>
			</section>
		</>
	);
}
