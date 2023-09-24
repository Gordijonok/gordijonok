import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useDebounce } from "../hook/useDebounce.js";
import { ErrorBoundary } from "../components/ErrorBoundary.js";
import { ErrorFallback } from "../components/ErrorFallback.js";
import { getDataFromLS } from "../function/function.js";
import { setDataToLS } from "../function/function.js";
import { useGetallMovieQuery } from "../redux/movieApi.js";
import { addHistoryMovies } from "../redux/historyFilmSlice.js";

import { FilmCard } from "./FilmCard.js";
import { Loading } from "./Loading.js";
import { SearchedFilms } from "./SearchedFilms.js";
import { ThemeContext } from "./ThemeProvider.js";

function Main() {
  const isAuth = getDataFromLS("isAuthorized", '""');
  const isAuthHis = isAuth + " history";
  const { isDark } = useContext(ThemeContext);
  const { data, isLoading } = useGetallMovieQuery();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = new URLSearchParams(location.search).get("search");
  const [searchName, setSearchName] = useState(name || "");
  const debName = useDebounce(searchName, 2000);

  function inputText(e) {
    setSearchName(e.target.value);
  }

  useEffect(() => {
    if (searchName.length > 0) {
      navigate(`?search=${debName}`);
      dispatch(addHistoryMovies(debName));
      if (!JSON.parse(localStorage.getItem(isAuthHis).includes(debName))) {
        setDataToLS(isAuthHis, [...getDataFromLS(isAuthHis, '""'), debName]);
      }
    }
  }, [debName]);

  return (
    <div className={isDark ? "main_black" : "main"}>
      <h2 className="main_title">Movie searching</h2>
      <input
        onChange={(e) => inputText(e)}
        className="main__input"
        type="text"
        placeholder="search movie"
      />
      {debName ? (
        <SearchedFilms debName={debName} />
      ) : isLoading ? (
        <Loading />
      ) : (
        <ErrorBoundary fallback={<ErrorFallback />}>
          <ul className="films">
            {data.Search.map((item) => (
              <FilmCard key={item.imdbID} item={item} />
            ))}
          </ul>
        </ErrorBoundary>
      )}
    </div>
  );
}

export default Main;
