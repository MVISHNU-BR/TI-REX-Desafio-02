import FormField from "../components/FormField";
import Header from "../components/Header";

export default function Register() {

    return (
      <>
      <Header />
        <section className="">
          <div className="bg-[url('src/assets/register-bg-phone.png')] bg-no-repeat bg-cover bg-center py-9 px-5 min-h-screen flex items-center justify-center sm:py-36 sm:px-11 lg:bg-none lg:p-0 lg:flex lg:h-full ">

            <main className="w-full bg-white rounded-3xl pt-6 pb-7 px-4 sm:py-[31px] sm:px-[68px] lg:pt-[58px] lg:pb-[30px] lg:pl-[105px] lg:pr-48 ">
              <h1 className=" text-center text-vinho text-2xl font-bold mb-6 leading-loose sm:text-left sm:text-4xl">
                Sign up Information
              </h1>
              <p className="text-center sm:text-left text-vinho text-base mb-10 sm:mb-[65px]">
                Already have an account?{" "}
                <a
                  href="/register"
                  className="text-roxo-claro font-bold"
                >
                  Log in.
                </a>
              </p>
              <form action="">
                <div className=" sm:flex sm:justify-between sm:gap-4">
                  <FormField
                    htmlFor="firstName"
                    inputType="text"
                    labelText="First name"
                    placeholder="Enter your first name"
                    className="mb-6 flex-auto"
                  />
                  <FormField
                    htmlFor="lastName"
                    inputType="text"
                    labelText="Last name"
                    placeholder="Enter your last name"
                    className="mb-6 flex-auto"
                  />
                </div>
                <FormField
                  htmlFor="email"
                  inputType="email"
                  labelText="Email"
                  placeholder="Enter your email"
                  className="mb-6"
                />
                <FormField
                  htmlFor="jobPosition"
                  inputType="text"
                  labelText="Job position"
                  placeholder="Enter your job position (example: Project Manager)"
                  className="mb-6"
                />
                
                <FormField
                  htmlFor="password"
                  inputType="password"
                  labelText="Password"
                  placeholder="Enter your password"
                  className="mb-8"
                />
                <button className="mb-5 sm:mb-8">Create an account</button>
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
              <div className="hidden lg:block self-stretch max-w-[626px] w-full lg:bg-[url('src/assets/register-desktop.png')] bg-no-repeat bg-cover bg-center">
              </div>
          </div>
        </section>
      </>
    );
}