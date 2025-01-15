import Header from '../components/Header';
import HeaderMenu from '../components/HeaderMenu';
import { useUser } from '@clerk/clerk-react';
import userImage from '../assets/profile-picture-1.jpg';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Profile() {
  const { user } = useUser();
  const userName =
    `${user?.firstName ?? ''}${user?.lastName ?? ''}` || 'userName';
  const setUsername = async () => {
    await user?.update({
      username: userName || undefined,
    });
  };

  const formatDate = (date: any) => {
    if (!date) return 'Data de criação';

    const d = new Date(date);

    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = String(d.getFullYear()).slice(2);
    const hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12;

    return `${day}/${month}/${year} ${hour12}:${minutes}${ampm}`;
  };

  useEffect(() => {
    setUsername();
  });

  return (
    <>
      <Header>
        <HeaderMenu></HeaderMenu>
      </Header>
      <main className="mx-5 sm:mx-14 lg:mx-[33px]">
        <section className="bg-[rgba(246,246,246,0.9)] opacity-90 rounded-lg my-[47px] pl-4 pr-[14px] lg:pl-[97px] lg:flex lg:py-12">
          <div>
            <div className=" flex flex-col sm:mt-[80px] gap-[77px] sm:gap-7 pt-14 lg:mt-0">
              <div className="flex gap-3 sm:gap-6 items-center">
                <img
                  src={user?.imageUrl || userImage}
                  alt=""
                  className="rounded-lg shadow-md w-[126px] h-[130.95px] sm:w-[174px] sm:h-[181px]"
                />
                <div className="text-wrap">
                  <h1 className="font-medium text-4xl mb-1 sm:text-5xl">
                    {user?.fullName || 'Usuário'}
                  </h1>
                  <p className="font-normal text-xl opacity-70 sm:text-3xl">
                    @{user?.username || 'Usuário'}
                  </p>
                </div>
              </div>
              <div className="flex flex-col pb-[19px] self-start">
                <h2 className="font-medium text-2xl">Profile data</h2>
                <p className="font-normal text-sm opacity-70 sm:text-base">
                  {user?.fullName || 'Usuário'}'s information
                </p>
              </div>
            </div>
            <div className="border border-cinza-3 m-auto mt-5 mb-3 lg:w-[500px]"></div>
            <h2 className="font-medium text-2xl pb-4">Contact</h2>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <p className="w-[109px] font-bold text-sm opacity-50 sm:text-base">
                  Email
                </p>
                <p className="font-normal text-sm opacity-50 sm:text-base">
                  {Array.isArray(user?.emailAddresses)
                    ? user.emailAddresses.map((email) => email.emailAddress)
                    : 'Endereço de e-mail'}
                </p>
              </div>
              <div className="flex">
                <p className="w-[109px] font-bold text-sm opacity-50 sm:text-base">
                  Twitter/x
                </p>
                <p className="font-normal text-sm opacity-50 sm:text-base">
                  @{user?.username}
                </p>
              </div>
              <div className="flex">
                <p className="w-[109px] font-bold text-sm opacity-50 sm:text-base">
                  Instagram
                </p>
                <p className="font-normal text-sm opacity-50 sm:text-base">
                  @{user?.username}
                </p>
              </div>
              <div className="flex">
                <p className="w-[109px] font-bold text-sm opacity-50 sm:text-base">
                  Linkedin
                </p>
                <p className="font-normal text-sm opacity-50 sm:text-base">
                  @{user?.username}
                </p>
              </div>
            </div>
            <h2 className="font-medium text-[24px] leading-9 pt-11 pb-4">
              Details
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <p className="font-bold w-[109px] text-sm opacity-50 sm:text-base">
                  User ID
                </p>
                <p className="font-normal text-sm opacity-50 sm:text-base">
                  {user?.id || 'User ID'}
                </p>
              </div>
              <div className="flex">
                <p className="w-[109px] font-bold text-sm opacity-50 sm:text-base">
                  Creation date
                </p>
                <p className="font-normal text-sm opacity-50 sm:text-base">
                  {formatDate(user?.createdAt)}
                </p>
              </div>
              <div className="flex">
                <p className="w-[109px] font-bold text-sm opacity-50 sm:text-base">
                  Title
                </p>
                <p className="font-normal text-sm opacity-50 sm:text-base">
                  Project Manager
                </p>
              </div>
            </div>
            <div className="border border-cinza-3 m-auto mt-5 mb-3 lg:hidden"></div>
          </div>
          <div className="lg:border-l lg:border-cinza-3 lg:ml-[21px] lg:pl-4 lg:pb-[86px]">
            <div className="flex flex-col pb-10">
              <h2 className="font-medium text-[24px] lg:pt-[124px] sm:text-[32px]">
                Latest activity
              </h2>
              <p className="font-normal text-sm opacity-50 sm:text-base">
                {user?.username}'s last Interactions
              </p>
            </div>
            <div className="flex flex-col gap-8 lg:pl-4">
              <div className="flex items-center gap-3">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src={user?.imageUrl || userImage}
                  alt=""
                />
                <p>
                  <strong>
                    {user?.firstName} {user?.lastName}
                  </strong>{' '}
                  marked task as done
                  <strong> on Set 25, 2024</strong>
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
                  </strong>{' '}
                  marked task as done
                  <strong> on Set 25, 2024</strong>
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
                  </strong>{' '}
                  marked task as done
                  <strong> on Set 25, 2024</strong>
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
                  </strong>{' '}
                  marked task as done
                  <strong> on Set 25, 2024</strong>
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
                  </strong>{' '}
                  marked task as done
                  <strong> on Set 25, 2024</strong>
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
                  </strong>{' '}
                  marked task as done
                  <strong> on Set 25, 2024</strong>
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
                  </strong>{' '}
                  marked task as done
                  <strong> on Set 25, 2024</strong>
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
                  </strong>{' '}
                  marked task as done
                  <strong> on Set 25, 2024</strong>
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
                  </strong>{' '}
                  marked task as done
                  <strong> on Set 25, 2024</strong>
                </p>
              </div>
            </div>
            <div className="pt-[73px] pb-[56px]">
              <h2 className="font-medium text-[24px] leading-9 sm:text-[32px]">
                Weekly Report
              </h2>
              <p className="font-normal text-sm opacity-50 leading-9 sm:text-base">
                Tasks estimate
              </p>
              <div className="flex flex-col pt-[14px]">
                <div className="flex">
                  <p className="w-[170px] sm:w-[243px] text-sm sm:text-xl leading-9 font-medium">
                    Total tasks assigned
                  </p>
                  <p className="text-sm sm:text-xl font-bold leading-9 text-blue-700">
                    30
                  </p>
                </div>
                <div className="flex">
                  <p className="w-[170px] sm:w-[243px] text-sm sm:text-xl leading-9 font-medium">
                    Average work time
                  </p>
                  <p className="sm:text-xl text-sm font-bold leading-9 text-blue-700">
                    15h 25min
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
