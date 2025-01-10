import { useSignUp } from "@clerk/react-router";
import FormField from "../components/FormField";
import Header from "../components/Header";
import { useState } from "react";
import GoogleLoginButton, {
  FacebookLoginButton,
} from "../components/SocialLoginButton";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { signUp, isLoaded } = useSignUp();

  const handleEmailPasswordRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!isLoaded) return;

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress: email,
        password,
      });
      setSuccessMessage("Conta criada com sucesso! Verifique seu email.");
      setInterval(() => {
        window.location.href = "/dashboard";
      }, 3000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Erro no registro: ", err);
      setError(err.errors ? err.errors[0]?.message : "Erro ao criar conta.");
    }
  };

  return (
    <>
      <Header />
      <section className="">
        <div className="bg-[url('src/assets/register-bg-phone.png')] bg-no-repeat bg-cover bg-center py-9 px-5 min-h-screen flex items-center justify-center sm:py-36 sm:px-11 lg:bg-none lg:p-0 lg:flex lg:h-full">
          <main className="w-full bg-white rounded-3xl pt-6 pb-7 px-4 sm:py-[31px] sm:px-[68px] lg:pt-[58px] lg:pb-[30px] lg:pl-[105px] lg:pr-48">
            <h1 className="text-center text-vinho text-2xl font-bold mb-6 leading-loose sm:text-left sm:text-4xl">
              Sign up Information
            </h1>
            <p className="text-center sm:text-left text-vinho text-base mb-10 sm:mb-[65px]">
              Already have an account?{" "}
              <a href="/login" className="text-roxo-claro font-bold">
                Log in.
              </a>
            </p>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {successMessage && (
              <p className="text-green-500 mb-4">{successMessage}</p>
            )}
            <form action="" onSubmit={handleEmailPasswordRegister}>
              <div className="sm:flex sm:justify-between sm:gap-4">
                <FormField
                  htmlFor="firstName"
                  inputType="text"
                  labelText="First name"
                  placeholder="Enter your first name"
                  className="mb-6 flex-auto"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <FormField
                  htmlFor="lastName"
                  inputType="text"
                  labelText="Last name"
                  placeholder="Enter your last name"
                  className="mb-6 flex-auto"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <FormField
                htmlFor="email"
                inputType="email"
                labelText="Email"
                placeholder="Enter your email"
                className="mb-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormField
                htmlFor="password"
                inputType="password"
                labelText="Password"
                placeholder="Enter your password"
                className="mb-8"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="mb-5 sm:mb-8" type="submit">
                Create an account
              </button>
            </form>
            <div id="clerk-captcha" />
            <p className="text-center text-vinho text-base leading-6 mb-2">
              or sign in with...
            </p>
            <div className="w-full flex justify-center gap-3">
              <FacebookLoginButton />
              <GoogleLoginButton />
            </div>
          </main>
          <div className="hidden lg:block self-stretch max-w-[626px] w-full lg:bg-[url('src/assets/register-desktop.png')] bg-no-repeat bg-cover bg-center"></div>
        </div>
      </section>
    </>
  );
}
