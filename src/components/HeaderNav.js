import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getDataFromLS, removeDataFromLS } from "../function/function";
import { clearHistoryMovies } from "../redux/historyFilmSlice";
import { clearFavoriteMovies } from "../redux/favouriteFilmSlice";

function HeaderNav() {
  const dispatch = useDispatch();
  const isAuthorized = getDataFromLS("isAuthorized", '""');
  const users = getDataFromLS("users", "[]");
  const currentUser = users.find((elem) => elem.email === isAuthorized);

  const exitUser = () => {
    removeDataFromLS("isAuthorized");
    dispatch(clearFavoriteMovies());
    dispatch(clearHistoryMovies());
    window.location.reload();
  };

  return (
    <nav className="nav">
      {isAuthorized ? (
        <ul className="nav__list">
          <h2 className="username"> Hello, {currentUser.login}</h2>
          <li className="nav__elem" key={1}>
            <Link className="white" to="/favourite">
              Favourite
            </Link>
          </li>
          <li className="nav__elem" key={2}>
            <Link className="white" to="/history">
              History
            </Link>
          </li>
          <li onClick={exitUser} className="nav__elem" key={3}>
            <Link className="white" to="/">
              Log out
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav__list">
          <li className="nav__elem" key={4}>
            <Link className="white" to="/signin">
              Sign in
            </Link>
          </li>
          <li className="nav__elem" key={5}>
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
