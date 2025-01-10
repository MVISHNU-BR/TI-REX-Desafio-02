import { SignedIn, SignedOut } from "@clerk/react-router";
import Dashboard from "../pages/Dashboard";
import Forbidem from "../pages/Forbidem";

export default function ProtectedDashboard() {
  return (
    <>
      <SignedIn>
        <Dashboard />
      </SignedIn>
      <SignedOut>
        <Forbidem />
      </SignedOut>
    </>
  );
}
