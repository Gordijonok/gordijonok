import { useSelector } from "react-redux/es/hooks/useSelector";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  getDataFrom,
  clearAll,
  selectorHistory,
  setDataTo,
} from "../function/function";
import { ThemeContext } from "../components/ThemeProvider";
import {
  clearHistoryMovies,
  deleteHistoryMovies,
} from "../redux/historyFilmSlice.js";

function History() {
  const isAuth = getDataFrom("isAuthorized", '""');
  const isAuthHis = isAuth + " history";
  const dispatch = useDispatch();
  const history = useSelector(selectorHistory);
  const { isDark } = useContext(ThemeContext);

  const deleteHistory = () => {
    dispatch(clearHistoryMovies());
    clearAll(isAuthHis);
  };

  if (history < 1) {
    return (
      <div className={isDark ? "main_black" : "main"}>
        <h2 className="main_title">Your search</h2>
        <h3 className="main_title">No data available</h3>
      </div>
    );
  }

  function deleteOneHistory(e) {
    const delHis = e.target.getAttribute("id");
    dispatch(deleteHistoryMovies(delHis));
    const history = getDataFrom(isAuthHis, "[]").filter(
      (item) => item !== delHis
    );
    setDataTo(isAuthHis, history);
  }

  return (
    <div className={isDark ? "main_black" : "main"}>
      <div className="history">
        <ul>
          <button onClick={deleteHistory}>clear</button>
          <h2 className="main_title">Your search</h2>
          {history.map((item) => (
            <div key={item} className="deleteFilmHistory">
              <Link className="hisFilm" to={`/?search=${item}`}>
                <div className="historyitem">{item}</div>
              </Link>
              <span id={item} onClick={(e) => deleteOneHistory(e)}>
                delete
              </span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { History };
