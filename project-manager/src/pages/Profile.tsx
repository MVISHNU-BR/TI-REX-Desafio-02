import Header from "../components/Header";
import HeaderMenu from "../components/HeaderMenu";
import { useUser } from "@clerk/clerk-react";
import userImage from "../assets/profile-picture-1.jpg";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Profile() {
  const { user } = useUser();
  const userName =
    `${user?.firstName ?? ""}${user?.lastName ?? ""}` || "userName";
  const setUsername = async () => {
    await user?.update({
      username: userName || undefined,
    });
  };

  useEffect(() => {
    setUsername();
  });

  return (
    <>
      <Header>
        <HeaderMenu></HeaderMenu>
      </Header>
      <main className="mx-5 sm:mx-14">
        <section className="bg-cinza-2 opacity-90 rounded-lg my-[47px] pl-4 pr-[14px]">
          <div className=" flex flex-col sm:mt-[80px] gap-[77px] sm:gap-7 pt-14 ">
            <div className="flex gap-3 sm:gap-6 items-center">
              <img
                src={user?.imageUrl || userImage}
                alt=""
                className="rounded-lg shadow-md w-[126px] h-[130.95px] sm:w-[174px] sm:h-[181px]"
              />
              <div className="min-w-[218px] break-words">
                <h1 className="font-medium text-4xl mb-1 sm:text-5xl">
                  {user?.fullName || "Usuário"}
                </h1>
                <p className="font-normal text-xl opacity-70 sm:text-3xl">
                  @{user?.username || "Usuário"}
                </p>
              </div>
            </div>
            <div className="flex flex-col pb-[19px] self-start">
              <h2 className="font-medium text-2xl">Profile data</h2>
              <p className="font-normal text-sm opacity-70 sm:text-base">
                {user?.fullName || "Usuário"}'s information
              </p>
            </div>
          </div>
          <div className="border border-black m-auto mt-5 mb-3 opacity-25"></div>
          <h2 className="font-medium text-2xl pb-4">Contact</h2>
          <div className="flex flex-col gap-2">
            <div className="flex">
              <p className="bold w-[109px]">
                <strong className="text-sm opacity-70 sm:text-base">
                  Email
                </strong>
              </p>
              <p className="font-normal text-sm opacity-70 sm:text-base">
                {Array.isArray(user?.emailAddresses)
                  ? user.emailAddresses.map((email) => email.emailAddress)
                  : "Endereço de e-mail"}
              </p>
            </div>
            <div className="flex">
              <p className="w-[109px]">
                <strong className="text-sm opacity-70 sm:text-base">
                  Twitter/x
                </strong>
              </p>
              <p className="font-normal text-sm opacity-70 sm:text-base">
                @{user?.username}
              </p>
            </div>
            <div className="flex">
              <p className="w-[109px]">
                <strong className="text-sm opacity-70 sm:text-base">
                  Instagram
                </strong>
              </p>
              <p className="font-normal text-sm opacity-70 sm:text-base">
                @{user?.username}
              </p>
            </div>
            <div className="flex">
              <p className="w-[109px]">
                <strong className="text-sm opacity-70 sm:text-base">
                  Linkedin
                </strong>
              </p>
              <p className="font-normal text-sm opacity-70 sm:text-base">
                @{user?.username}
              </p>
            </div>
          </div>
          <h2 className="font-medium text-[24px] leading-9 pt-11 pb-4">
            Details
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex">
              <p className="bold w-[109px]">
                <strong className="text-sm opacity-70 sm:text-base">
                  User ID
                </strong>
              </p>
              <p className="font-normal text-sm opacity-70 sm:text-base">
                {user?.id || "User ID"}
              </p>
            </div>
            <div className="flex">
              <p className="w-[109px]">
                <strong className="text-sm opacity-70 sm:text-base">
                  Creation date
                </strong>
              </p>
              <p className="font-normal text-sm opacity-70 sm:text-base">
                {user?.createdAt
                  ? user.createdAt.toString()
                  : "Data de criação"}
              </p>
            </div>
            <div className="flex">
              <p className="w-[109px]">
                <strong className="text-sm opacity-70 sm:text-base">
                  Title
                </strong>
              </p>
              <p className="font-normal text-sm opacity-70 sm:text-base">
                Project Manager
              </p>
            </div>
          </div>
          <div className="border border-black m-auto mt-5 mb-3 opacity-25"></div>
          <div className="flex flex-col pb-10">
            <h2 className="font-medium text-[24px]">Latest activity</h2>
            <p className="font-normal text-sm opacity-70 sm:text-base">
              {user?.username}'s last Interactions
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img
              className="w-[50px] h-[50px] rounded-full"
              src={user?.imageUrl || userImage}
              alt=""
            />
            <p>
              <strong>
                {user?.firstName} {user?.lastName}
              </strong>{" "}
              marked task as done
              <strong> on{}</strong>
            </p>
          </div>
          <div className="pt-[73px] pb-[56px]">
            <h2 className="font-medium text-[24px] leading-9 sm:text-[32px]">
              Weekly Report
            </h2>
            <p className="font-normal text-sm opacity-70 sm:text-base">
              Tasks estimate
            </p>
            <div className="flex flex-col pt-[14px]">
              <div className="flex">
                <p className="w-[243px] text-xl font-medium">
                  Total tasks assigned
                </p>
                <p className="text-xl font-bold text-blue-700">30</p>
              </div>
              <div className="flex">
                <p className="w-[243px] text-xl font-medium">
                  Average work time
                </p>
                <p className="text-xl font-bold text-blue-700">15h 25min</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
