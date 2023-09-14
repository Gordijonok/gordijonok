function HeaderNav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <a href="/signin">
          <li className="nav__elem">Sign in</li>
        </a>
        <a href="/signup">
          <li className="nav__elem"> Sign up</li>
        </a>
      </ul>
    </nav>
  );
}

export { HeaderNav };
