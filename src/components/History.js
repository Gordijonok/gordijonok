import { useSelector } from "react-redux/es/hooks/useSelector";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getDataFromLS, removeDataFromLS } from "../function/function";
import { ThemeContext } from "../components/ThemeProvider";
import { clearHistoryMovies } from "../redux/historyFilmSlice.js";

function History() {
  const isAuth = getDataFromLS("isAuthorized", '""');
  const isAuthHis = isAuth + " history";
  const dispatch = useDispatch();
  const history = useSelector((state) => state.historyMovies.historyMovies);
  const { isDark } = useContext(ThemeContext);

  const deleteHistory = () => {
    dispatch(clearHistoryMovies());
    removeDataFromLS(isAuthHis);
  };

  if (history < 1) {
    return (
      <div className={isDark ? "main_black" : "main"}>
        <h2 className="main_title">Your favourite films</h2>
        <h3 className="main_title">No items.</h3>
      </div>
    );
  }

  return (
    <div className={isDark ? "main_black" : "main"}>
      <div className="history">
        <ul>
          <button onClick={deleteHistory}>clear</button>
          <h2 className="main_title">Your favourite films</h2>
          {history.map((item) => (
            <Link key={item} to={`/?search=${item}`}>
              <li className="historyitem">{item}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { History };
