import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { getDataFrom, removeDataFrom } from "../function/function";

function HeaderNav() {
  const navigate = useNavigate();
  const isAuthorized = getDataFrom("isAuthorized", '""');
  const users = getDataFrom("users", "[]");
  const currentUser = users.find((elem) => elem.email === isAuthorized);

  const exitUser = () => {
    removeDataFrom("isAuthorized");
    navigate("/");
  };

  return (
    <nav className="nav">
      {isAuthorized ? (
        <ul className="nav__list">
          <h2 className="username"> Hello, {currentUser.login}</h2>
          <li className="nav__elem">
            <Link className="white" to="/favourite">
              Favourite
            </Link>
          </li>
          <li className="nav__elem">
            <Link className="white" to="/history">
              History
            </Link>
          </li>
          <li onClick={exitUser} className="nav__elem">
            <Link className="white" to="/">
              Log out
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav__list">
          <li className="nav__elem">
            <Link className="white" to="/signin">
              Sign in
            </Link>
          </li>
          <li className="nav__elem">
            <Link className="white" to="/signup">
              Sign up
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export { HeaderNav };
