import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { Loading } from "./components/Loading.js";
import { ThemeProvider } from "./components/ThemeProvider.js";
import { ErrorBoundary } from "./components/ErrorBoundary.js";
import { ErrorFallback } from "./components/ErrorFallback.js";
import { Favourite } from "./components/Favourite.js";
import { History } from "./components/History.js";
import { PrivateRoute } from "./components/PrivateRouter.js";

import "./style.css";

const Main = lazy(() => import("./components/Main.js"));
const Signin = lazy(() => import("./components/Signin.js"));
const Signup = lazy(() => import("./components/Signup.js"));
const Filminfo = lazy(() => import("./components/Filminfo.js"));

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Main />
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
            path="/favourite"
            element={
              <PrivateRoute>
                <Suspense fallback={<Loading />}>
                  <Favourite />
                </Suspense>
              </PrivateRoute>
            }
          />

          <Route
            path="/history"
            element={
              <PrivateRoute>
                <Suspense fallback={<Loading />}>
                  <History />
                </Suspense>
              </PrivateRoute>
            }
          />

          <Route
            path="/filminfo/:id"
            element={
              <Suspense fallback={<Loading />}>
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Filminfo />
                </ErrorBoundary>
              </Suspense>
            }
          />
        </Routes>

        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
