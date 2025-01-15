import { SignedIn, SignedOut } from "@clerk/react-router";
import Forbiden from "../pages/Forbidden";
import { Outlet } from "react-router";
export default function ProtectedRoutes() {
  return (
    <>
      <SignedIn>
        <Outlet />
      </SignedIn>
      <SignedOut>
        <Forbiden />
      </SignedOut>
    </>
  );
}
