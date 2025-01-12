import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Forbidden from "./pages/Forbidden";
import Kanban from "./pages/Kanban";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/kanban" element={<Kanban />}></Route>
        <Route path="*" element={<NotFound />}></Route>   
        <Route path="/403" element={<Forbidden />}></Route> 
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
