import { useSelector } from "react-redux/es/hooks/useSelector";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  getDataFromLS,
  removeDataFromLS,
  deleteHitory,
} from "../function/function";
import { ThemeContext } from "../components/ThemeProvider";
import {
  clearHistoryMovies,
  deleteHistoryMovies,
} from "../redux/historyFilmSlice.js";

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
        <h3 className="main_title">No films.</h3>
      </div>
    );
  }

  function deleteOneHistory(e) {
    const delHis = e.target.getAttribute("id");
    dispatch(deleteHistoryMovies(delHis));
    //     deleteHistory(isAuthHis, delHis);
  }

  return (
    <div className={isDark ? "main_black" : "main"}>
      <div className="history">
        <ul>
          <button onClick={deleteHistory}>clear</button>
          <h2 className="main_title">Your favourite films</h2>
          {history.map((item) => (
            <div className="deleteFilmHistory">
              <Link className="hisFilm" key={item} to={`/?search=${item}`}>
                <li className="historyitem">{item}</li>
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
