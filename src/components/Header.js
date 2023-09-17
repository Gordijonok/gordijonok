import { useContext } from "react";

import { ThemeContext } from "./ThemeProvider";

import { Logo } from "./Logo.js";
import { HeaderNav } from "./HeaderNav.js";

function Header() {
  const { isDark } = useContext(ThemeContext);
  return (
    <header className={isDark ? "header black" : "header"}>
      <Logo />
      <HeaderNav />
    </header>
  );
}

export { Header };
