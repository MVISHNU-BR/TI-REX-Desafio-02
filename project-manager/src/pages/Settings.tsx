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
      <main className="px-5 bg-white pt-[183px] sm:pt-[80px] pb-12 ">
        {/* Profile name */}
        <section className="flex flex-col gap-16 items-center sm:gap-7">
          <div className="flex items-center gap-3 sm:self-start">
            <img
              src={user?.imageUrl || userImage}
              alt="Profile image"
              className="rounded-full shadow-xl w-[119px] h-[119px] sm:w-[174px] sm:h-[181px]"
            />
            <div className="min-w-[218px] break-words">
              <h1 className="font-medium text-[35px] sm:text-5xl">
                {user?.fullName || "Usuário"}
              </h1>
              <p className="font-normal text-xl opacity-70 sm:text-[28px]">
                {Array.isArray(user?.emailAddresses)
                  ? user.emailAddresses.map((email) => email.emailAddress)
                  : "Endereço de e-mail"}
              </p>
            </div>
          </div>
          <div className="flex flex-col self-start">
            <h2 className="font-medium text-3xl sm:text-[32px]">
              Project profile
            </h2>
            <p className="font-normal text-sm opacity-70 sm:text-base">
              Update your profile information in the sections below.
            </p>
          </div>
        </section>
        <div className="border border-b-black m-auto mt-5 mb-3 opacity-25"></div>
        {/* profile email and name */}
        <section className="flex flex-col gap-5 sm:w-[617px]  lg:w-full lg:max-w-[1440px] lg:flex-row lg:justify-between lg:pr-8">
          <div className="sm:w-[420px] ">
            <h3 className="font-medium text-xl sm:text-2xl">
              Basic information
            </h3>
            <p className="font-normal text-sm opacity-50 leading-8 sm:text-base sm:leading-8 sm:w-[420px]">
              Update your name and e-mail in this section. Note: this
              information will be public to all your project colleagues and can
              be changed anytime.
            </p>
          </div>
          <form action="" className="flex flex-wrap sm:gap-5 lg:w-[637px] ">
            <FormField
              htmlFor="FirstName"
              inputType="text"
              labelText="First Name"
              placeholder="New First Name"
              className="mb-3 min-w-[297px]"
            />
            <FormField
              htmlFor="LastName"
              inputType="text"
              labelText="Last Name"
              placeholder="New Last Name"
              className="mb-3 min-w-[297px]"
            />
            <FormField
              htmlFor="Email"
              inputType="text"
              labelText="E-mail"
              placeholder="New e-mail"
              className="mb-3 min-w-[297px] md:min-w-[617px]"
            />
          </form>
        </section>

        <div className="border border-b-black m-auto mt-5 mb-3 opacity-25"></div>
        {/* Update image profile */}
        <section className="flex flex-col gap-7 lg:max-w-[1440px] lg:flex-row lg:justify-between lg:pr-8">
          <div className="sm:w-[420px]">
            <h4 className="font-medium text-xl sm:text-2xl">Profile Picture</h4>
            <p className="font-normal text-sm opacity-50 leading-8 sm:text-base sm:leading-8">
              Update your profile picture. Supported files are JPG, PNG, WebP
              and JPEG.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-5  lg:w-[637px]">
            <img
              src={user?.imageUrl || userImage}
              alt="Profile image"
              className="rounded-full shadow-xl w-[119px] h-[119px] sm:w-[174px] sm:h-[181px]"
            />
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2 sm:w-[410px]">
                <label
                  htmlFor="imageInput"
                  className="text-azul-escuro text-sm font-medium "
                >
                  Add new profile picture
                </label>
                <div className="w-[353px] h-12 pl-9 flex justify-between pr-2 border rounded-lg items-center bg-[url('/src/assets/SystemIcons.svg')] bg-no-repeat bg-[12px_center] sm:w-full">
                  <label htmlFor="imageInput" className="text-base">
                    imageattachment.jpg
                  </label>
                  <input
                    type="file"
                    id="imageInput"
                    className="hidden w-full"
                    placeholder="Upload Image"
                  />
                  <button className="">
                    <img
                      src="/src/assets/lixeiraIcons.svg"
                      alt="Delete"
                      className="w-[18px] h-[18px]"
                    />
                  </button>
                </div>
              </div>

              <div className=" w-[353px] h-[152px] rounded-lg border border-dashed border-roxo-create flex flex-col items-center justify-center sm:w-[410px]">
                <img
                  src="/src/assets/uploadicon.svg"
                  className="w-[24px] h-[24px] mb-2"
                  alt="Upload"
                />
                <span className="text-center text-[16px] leading-[26px] tracking-[-0.02em] font-inter font-normal text-cinza-create">
                  Drop here to attach or{" "}
                  <span className="text-roxo-claro">upload</span>
                </span>
                <span className="mt-4 text-cin tracking-[-0.02em] font-inter font-normal  text-cinza-create">
                  Max size: 5GB
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="border border-b-black m-auto mt-5 mb-3 opacity-25"></div>
        {/* Communication  */}
        <section className="flex flex-col gap-5 lg:max-w-[1440px] lg:flex-row lg:justify-between lg:pr-8">
          <div className="sm:w-[420px] ">
            <h4 className="font-medium text-xl sm:text-2xl">Communication</h4>
            <p className="font-normal text-sm opacity-50 leading-8 sm:text-base sm:leading-8">
              Update your e-mail communication preferences anytime. Choose to
              receive project notifications or disable them completely.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:self-start lg:py-7  lg:w-[637px]">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <label
                  htmlFor="NewTask"
                  className="inline-flex items-center cursor-pointer border p-[1px] border-cinza-create rounded-lg border-opacity-25"
                >
                  <input
                    id="NewTask"
                    type="checkbox"
                    className="w-6 h-6 rounded-md appearance-none checked:bg-blue-500 checked:border-blue-500 focus:ring-0"
                  />
                </label>
                <label htmlFor="NewTask" className="text-sm font-inter">
                  New Tasks
                </label>
              </div>
              <p className="text-sm font-inter">
                Receive an e-mail alert each time a new task is assigned to me
                in a project.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <label
                  htmlFor="NewTeam"
                  className="inline-flex items-center cursor-pointer border p-[1px] border-cinza-create rounded-lg border-opacity-25"
                >
                  <input
                    id="NewTeam"
                    type="checkbox"
                    className="w-6 h-6 rounded-md appearance-none checked:bg-blue-500 checked:border-blue-500 focus:ring-0"
                  />
                </label>
                <label htmlFor="NewTeam" className="text-sm font-inter">
                  New team members
                </label>
              </div>
              <p className="text-sm font-inter">
                Receive an e-mail alert each time a team members enters in a
                project I’m assigned to.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <label
                  htmlFor="WeeklyReport"
                  className="inline-flex items-center cursor-pointer border p-[1px] border-cinza-create rounded-lg border-opacity-25"
                >
                  <input
                    id="WeeklyReport"
                    type="checkbox"
                    className="w-6 h-6 rounded-md appearance-none checked:bg-blue-500 checked:border-blue-500 focus:ring-0"
                  />
                </label>
                <label htmlFor="WeeklyReport" className="text-sm font-inter">
                  Weekly reports
                </label>
              </div>
              <p className="text-sm font-inter">
                Receive a weekly e-mail with a basic report, including estimated
                time and most active members.
              </p>
            </div>
          </div>
        </section>

        <div className="border border-b-black m-auto mt-5 mb-3 opacity-25"></div>
        {/*Social Information  */}
        <section className="flex flex-col gap-5 w-full lg:max-w-[1440px] lg:flex-row lg:justify-between lg:pr-8">
          <div className="sm:w-[420px] ">
            <h4 className="font-medium text-xl sm:text-2xl">
              Social information
            </h4>
            <p className="font-normal text-sm opacity-50 leading-8 sm:text-base sm:leading-8">
              Update your e-mail communication preferences anytime. Choose to
              receive project notifications or disable them completely.
            </p>
          </div>

          <form className="flex flex-col items-center sm:items-start lg:py-8  lg:w-[637px]">
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
          </form>
        </section>
        <div className="flex flex-col items-center justify-center gap-4 pt-[48px] lg:pt-[90px]">
          <button className="w-[353px] bg-azul-escuro text-white text-center rounded-lg py-3 hover:bg-azul-hover2 sm:w-[410px] lg:self-center">
            Update Information
          </button>
          <p className="text-sm sm:text-base">
            <span>Never mind, take me </span>
            <Link
              to="/dashboard"
              className="text-roxo-claro hover:underline hover:text-azul-hover"
            >
              back to my project.
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
