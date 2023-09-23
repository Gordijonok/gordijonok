import { useContext } from "react";

import { Link } from "react-router-dom";

import home from "../img/home.png";
import sun from "../img/sun.png";
import moon from "../img/moon.png";

import { ThemeContext } from "./ThemeProvider";

function Logo() {
  const { isDark, setIdDark } = useContext(ThemeContext);
  return (
    <div className="logo">
      <Link to="/">
        <img className="logo__home" src={home} alt="home" />
      </Link>
      <img
        className="logo__sun"
        onClick={() => setIdDark((isDark) => !isDark)}
        src={isDark ? sun : moon}
        alt="sun"
      />
    </div>
  );
}

export { Logo };
