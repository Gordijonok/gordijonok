import React from "react";

import { Routes, Route, Link } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";

import { MyProvider } from "./provider/MyProvider.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Footer } from "./components/Footer.js";
import { Signin } from "./components/Signin.js";
import { Signup } from "./components/Signup.js";

import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
