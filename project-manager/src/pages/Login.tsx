import Header from '../components/Header';
import FormField from '../components/FormField';
import { useSignIn } from '@clerk/clerk-react';
import { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router';
import GoogleLoginButton, {
  FacebookLoginButton,
} from '../components/SocialLoginButton';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { signIn, isLoaded } = useSignIn();

  const handleEmailPasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isLoaded) return;

    try {
      await signIn.create({
        identifier: email,
        password,
      });
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Erro ao autenticar. Verifique suas credenciais.');
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-grow flex flex-col justify-center">
        <div className="flex flex-col flex-grow">
          <div className="bg-[url('src/assets/login-bg-phone.png')] bg-no-repeat bg-cover bg-center py-9 px-5 flex items-center justify-center sm:py-36 sm:px-11 lg:bg-none lg:p-0 lg:flex flex-grow">
            <div className="hidden lg:block self-stretch max-w-[626px] w-full lg:bg-[url('src/assets/login-desktop.png')] bg-no-repeat bg-cover bg-center"></div>
            <main className="w-full bg-white rounded-3xl py-14 px-3 sm:px-16 lg:pt-11 lg:pb-12 lg:px-32">
              <h1 className="text-center text-vinho text-2xl font-bold mb-6 leading-loose sm:text-left sm:text-4xl">
                Login Information
              </h1>
              <p className="text-center sm:text-left text-vinho text-base">
                Enter your credentials
              </p>
              <p className="text-center sm:text-left text-vinho text-base mb-10">
                New here? Let's take you to{' '}
                <Link to="/register" className="text-roxo-claro font-bold">
                  sign up
                </Link>
              </p>
              <form onSubmit={handleEmailPasswordLogin}>
                <FormField
                  htmlFor="email"
                  inputType="email"
                  labelText="Email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-6"
                />
                <FormField
                  htmlFor="password"
                  inputType="password"
                  labelText="Password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mb-11"
                />
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <button
                  className="w-full bg-azul-escuro text-white rounded-lg py-2 px-4"
                  type="submit"
                >
                  Login
                </button>
              </form>
              <p className="text-center text-vinho text-base leading-6 mb-2">
                or sign in with...
              </p>
              <div className="w-full flex justify-center gap-3">
                <FacebookLoginButton />
                <GoogleLoginButton />
              </div>
            </main>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
