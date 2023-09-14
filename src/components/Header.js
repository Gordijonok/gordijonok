import { useState } from "react";

import { Logo } from "./Logo.js";
import { HeaderNav } from "./HeaderNav.js";

function Header() {
  const [black, setBlack] = useState(true);
  return (
    <header className={black ? "header black" : "header"}>
      <Logo black={black} setBlack={setBlack} />
      <HeaderNav />
    </header>
  );
}

export { Header };
