import React, { createContext, useState, lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { Loading } from "./components/Loading.js";

import "./style.css";

const Main = lazy(() => import("./components/Main.js"));
const Signin = lazy(() => import("./components/Signin.js"));
const Signup = lazy(() => import("./components/Signup.js"));
const Filminfo = lazy(() => import("./components/Filminfo.js"));
const FilmContext = createContext(null);

function App() {
  const [film, setFilm] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <FilmContext.Provider value={film}>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Main film={film} setFilm={setFilm} />
              </Suspense>
            }
          />
          <Route
            path="/signin"
            element={
              <Suspense fallback={<Loading />}>
                <Signin />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<Loading />}>
                <Signup />
              </Suspense>
            }
          />
          <Route
            path="/filminfo/:id"
            element={
              <Suspense fallback={<Loading />}>
                <Filminfo film={film} />
              </Suspense>
            }
          />
        </Routes>
      </FilmContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
export { FilmContext };
