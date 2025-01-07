// TODO: adicionar componente separado para os botões
import Header from "../components/Header"
import FormField from "../components/FormField";
import { useEffect } from "react"

export default function Login() {
  useEffect(() => {
    document.body.classList.add('relative');
    return () => {
      document.body.classList.remove('relative');
    };
  }, []);
  
  return (
    <>
      <img src="src/assets/login-bg-phone.png" alt="Tablet" className="absolute -z-10 w-full h-full" />
      <Header />
      <section className="py-9 px-5 min-h-screen flex items-center justify-center">
        <main className="modal w-full min-h-full bg-white rounded-3xl py-14 px-3">
          <h1 className="title text-vinho text-center text-2xl font-bold mb-6 leading-loose">Login Information</h1>
          <p className="text-center text-vinho text-base">Enter your credentials</p>
          <p className="text-center text-vinho text-base mb-10">New here? Let's take you to <a href="/signup" className="text-roxo-claro font-bold">sign up</a></p>
          <form action="">
            <FormField htmlFor="email" inputType="email" labelText="Email" placeholder="Enter your email" className="mb-6"/>
            <FormField htmlFor="password" inputType="password" labelText="Password" placeholder="Enter your password" className="mb-11"/>
            <button className="mb-10">Login</button>
          </form>
          <p className="text-center text-vinho leading-6 mb-2">or sign in with...</p>
          <div className="w-full flex justify-center gap-3">
            <button className="w-28 h-14 rounded-full border border-slate-200 flex items-center justify-center">
              <img src="src/assets/facebook-logo-colored.svg" alt="" />
            </button>
            <button className="w-28 h-14 rounded-full border border-slate-200 flex items-center justify-center">
              <img src="src/assets/google-logo-colored.svg" alt="" />
            </button>
          </div>
        </main>
      </section>
    </>
  )
}