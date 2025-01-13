import Header from "../components/Header";
import HeaderMenu from "../components/HeaderMenu";
import { useUser } from "@clerk/clerk-react";
import userImage from "../assets/profile-picture-1.jpg";
import FormField from "../components/FormField";
import { Link } from "react-router";
import Footer from "../components/Footer";

export default function Settings() {
  const { user } = useUser();

  return (
    <>
      <Header>
        <HeaderMenu></HeaderMenu>
      </Header>
      <main className="px-5">
        <section className="flex flex-col gap-16 items-center debug mt-[183px]">
          <div className="flex items-center gap-4">
            <img
              src={user?.imageUrl || userImage}
              alt=""
              width={119}
              height={119}
              className="rounded-full shadow-md"
            />
            <div className="">
              <h1 className="font-medium text-4xl mb-1">
                {user?.fullName || "Usuário"}
              </h1>
              <p className="font-normal text-xl opacity-70">
                {Array.isArray(user?.emailAddresses)
                  ? user.emailAddresses.map((email) => email.emailAddress)
                  : "Endereço de e-mail"}
              </p>
            </div>
          </div>
          <div className="flex flex-col debug self-start">
            <h2 className="font-medium text-3xl">Project profile</h2>
            <p className="font-normal text-sm opacity-70">
              Update your profile information in the sections below.
            </p>
          </div>
        </section>
        <div className="border border-black w-[353px] m-auto mt-5 mb-3 opacity-25"></div>

        <section className="debug flex flex-col gap-5">
          <div className="">
            <h3 className="font-medium text-xl">Basic information</h3>
            <p className="font-normal text-sm opacity-50 leading-8">
              Update your name and e-mail in this section. Note: this
              information will be public to all your project colleagues and can
              be changed anytime.
            </p>
          </div>
          <form action="">
            <FormField
              htmlFor="FirstName"
              inputType="text"
              labelText="First Name"
              placeholder="New First Name"
              className="mb-3"
            />
            <FormField
              htmlFor="LastName"
              inputType="text"
              labelText="Last Name"
              placeholder="New Last Name"
              className="mb-3"
            />
            <FormField
              htmlFor="Email"
              inputType="text"
              labelText="E-mail"
              placeholder="New e-mail"
              className="mb-3"
            />
          </form>
        </section>
        <div className="border border-black w-[353px] m-auto mt-5 mb-3 opacity-25"></div>
        <section className="">
          <h4 className="font-medium text-xl">Profile Picture</h4>
          <p className="font-normal text-sm opacity-50 leading-8">
            Update your profile picture. Supported files are JPG, PNG, WebP and
            JPEG.
          </p>
          <img
            src={user?.imageUrl || userImage}
            alt=""
            width={119}
            height={119}
            className="rounded-full shadow-md mb-2"
          />
          <span className="text-azul-escuro text-sm font-medium">
            Add new profile picture
          </span>
        </section>
        <div className="border border-black w-[353px] m-auto mt-5 mb-3 opacity-25"></div>
        <section className="">
          <div className="">
            <h4 className="font-medium text-xl">Communication</h4>
            <p className="font-normal text-sm opacity-50 leading-8">
              Update your e-mail communication preferences anytime. Choose to
              receive project notifications or disable them completely.
            </p>
            <div className=""></div>
          </div>
        </section>
        <div className="border border-black w-[353px] m-auto mt-5 mb-3 opacity-25"></div>

        <section className="flex items-center flex-col gap-5 mb-9">
          <div className="flex flex-col debug">
            <h4 className="font-medium text-xl">Social information</h4>
            <p className="font-normal text-sm opacity-50 leading-8">
              Update your e-mail communication preferences anytime. Choose to
              receive project notifications or disable them completely.
            </p>
          </div>
          <form className="flex flex-col  debug items-center gap-10">
            <div className="flex flex-col items-center px-5">
              <div className="flex items-center gap-1">
                <FormField
                  htmlFor="twitter/X"
                  inputType="text"
                  labelText="Twitter/X"
                  placeholder="X.com/"
                  className="mb-3 text-cinza-input text-sm font-normal"
                />
                <FormField
                  htmlFor="userTwitter"
                  inputType="text"
                  placeholder="Your Account"
                  className="mb-3 mt-5  text-cinza-input text-sm font-normal"
                />
              </div>
              <div className="flex items-center gap-1">
                <FormField
                  htmlFor="instagram"
                  inputType="text"
                  labelText="Instagram"
                  placeholder="Instagram.com/"
                  className="mb-3 text-cinza-input text-sm font-normal"
                />
                <FormField
                  htmlFor="userInstagram"
                  inputType="text"
                  placeholder="Your Account"
                  className="mb-3 mt-5 text-cinza-input text-sm font-normal"
                />
              </div>
              <div className="flex items-center gap-1">
                <FormField
                  htmlFor="linkedin"
                  inputType="text"
                  labelText="Linkedin"
                  placeholder="Linkedin.com/in/"
                  className="mb-3 text-cinza-input text-sm font-normal"
                />
                <FormField
                  htmlFor="userTwitter"
                  inputType="text"
                  placeholder="Your Account"
                  className="mb-3 mt-5  text-cinza-input text-sm font-normals"
                />
              </div>
            </div>
            <button className="bg-azul-escuro text-white text-center rounded-lg py-3 w-[353px]">
              Update Information
            </button>
          </form>

          <p className="">
            <span>Never mind, take me </span>
            <Link to="/dashboard" className="text-roxo-claro hover:underline">
              back to my project.
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
