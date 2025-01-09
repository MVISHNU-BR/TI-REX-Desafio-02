import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ClerkProvider } from "@clerk/react-router";
import Dashboard from "./pages/Dashboard";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}  >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </ClerkProvider>
    </StrictMode>
  </BrowserRouter>
);
