import { useUser } from "@clerk/clerk-react";
import Header from "../components/Header";
import HeaderMenu from "../components/HeaderMenu";

export default function Dashboard() {
  const { user } = useUser();
  return (
    <>
      <Header>
        <HeaderMenu></HeaderMenu>
      </Header>
      <h1 className="text-2xl">Bem-vindo(a), {user?.fullName || "Usuário"}</h1>
    </>
  );
}
