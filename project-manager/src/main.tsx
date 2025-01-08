import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/Home";
<<<<<<< HEAD


import Footer from "./components/Footer";
=======
import Login from "./pages/Login";
import Register from "./pages/Register";
>>>>>>> 8fba190fae5bdb76a76611484db8804e3d706e53

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
=======
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
>>>>>>> 8fba190fae5bdb76a76611484db8804e3d706e53
    </StrictMode>
  </BrowserRouter>
);
