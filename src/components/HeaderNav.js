import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { getDataFromLS, removeDataFromLS } from "../function/function";

import { clearFavoriteMovies } from "../redux/favouriteFilmSlice";

function HeaderNav() {
  const dispatch = useDispatch();
  const isAuthorized = getDataFromLS("isAuthorized", '""');
  const users = getDataFromLS("users", "[]");
  const currentUser = users.find((elem) => elem.email === isAuthorized);

  function exitUser() {
    removeDataFromLS("isAuthorized");
    dispatch(clearFavoriteMovies());
    navigate("/");
  }

  const navigate = useNavigate();
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
          <li onClick={() => exitUser()} className="nav__elem">
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
