import { useContext } from "react";

import home from "../img/home.png";
import sun from "../img/sun.png";
import moon from "../img/moon.png";

import { ThemeContext } from "./ThemeProvider";

function Logo() {
  const { isDark, setIdDark } = useContext(ThemeContext);
  return (
    <div className="logo">
      <a href="/">
        <img className="logo__home" src={home} alt="home" />
      </a>
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
