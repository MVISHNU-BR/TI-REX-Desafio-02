import { SignedIn, SignedOut } from "@clerk/react-router";
import Dashboard from "../pages/Dashboard";
import Forbiden from "../pages/Forbidden";

export default function ProtectedDashboard() {
  return (
    <>
      <SignedIn>
        <Dashboard />
      </SignedIn>
      <SignedOut>
        <Forbiden />
      </SignedOut>
    </>
  );
}
