import { useUser, useClerk } from "@clerk/clerk-react";
import Header from "../components/Header";

export default function Dashboard() {
  const { user } = useUser();
  const { signOut } = useClerk();
  return (
    <>
      <Header />
      <h1 className="text-2xl">Bem-vindo(a), {user?.fullName || "Usuário"}</h1>
      <button onClick={() => signOut()} className="btn btn-primary mt-4">
        Logout
      </button>
    </>
  );
}
