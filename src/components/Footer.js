import { useContext } from "react";

import { ThemeContext } from "./ThemeProvider";

function Footer() {
  const { isDark } = useContext(ThemeContext);
  return (
    <footer className={isDark ? "header black" : "header"}>
      <h3>Movie App</h3>
    </footer>
  );
}

export { Footer };
