import { useState, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useDebounce } from "../hook/useDebounce.js";
import { ErrorBoundary } from "../components/ErrorBoundary.js";
import { ErrorFallback } from "../components/ErrorFallback.js";
import { setDataTo, getDataFrom } from "../function/function.js";
import { useGetallMovieQuery } from "../redux/movieApi.js";
import { addHistoryMovies } from "../redux/historyFilmSlice.js";

import { FilmCard } from "./FilmCard.js";
import { Loading } from "./Loading.js";
import { SearchedFilms } from "./SearchedFilms.js";
import { ThemeContext } from "./ThemeProvider.js";
import { Digest } from "./Digest.js";

function Main() {
  const isAuth = getDataFrom("isAuthorized", '""');
  const isAuthHis = isAuth + " history";
  const [isShowSuggest, setIsShowSuggest] = useState(false);
  const { isDark } = useContext(ThemeContext);
  const { data, isLoading } = useGetallMovieQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("search");
  const [searchName, setSearchName] = useState(name || "");
  const debName = useDebounce(searchName, 500);
  const [keyCod, setKeyCod] = useState(false);

  function inputText(e) {
    setSearchName(e.target.value);
    setKeyCod(false);
  }

  useEffect(() => {
    if (debName.length > 0 && keyCod) {
      navigate(`?search=${debName}`);
      dispatch(addHistoryMovies(debName));
      if (!getDataFrom(isAuthHis, "[]").includes(debName)) {
        setDataTo(isAuthHis, [...getDataFrom(isAuthHis, '""'), debName]);
      }
    }
  }, [debName, keyCod]);

  return (
    <div className={isDark ? "main_black" : "main"}>
      <h2 className="main_title">Movie searching</h2>
      <input
        onChange={(e) => inputText(e)}
        onFocus={() => setIsShowSuggest(true)}
        onBlur={() => setTimeout(() => setIsShowSuggest(false), 300)}
        className="main__input"
        type="text"
        placeholder="search movie"
        value={searchName}
      />
      <button onClick={() => setKeyCod(true)} className="search">
        search
      </button>

      {isLoading ? (
        <Loading />
      ) : debName && keyCod ? (
        <SearchedFilms debName={debName} />
      ) : debName && !keyCod ? (
        <Digest debName={debName} isShowSuggest={isShowSuggest} />
      ) : (
        <ErrorBoundary fallback={<ErrorFallback />}>
          <ul className="films">
            {data.map((item) => (
              <FilmCard key={item.imdbID} item={item} />
            ))}
          </ul>
        </ErrorBoundary>
      )}
    </div>
  );
}

export default Main;
