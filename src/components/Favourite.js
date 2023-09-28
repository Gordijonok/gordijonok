import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearFavoriteMovies } from "../redux/favouriteFilmSlice";
import { LSkey, removeDataFromLS } from "../function/function.js";
import { ThemeContext } from "../components/ThemeProvider";
import { selector } from "../function/function.js";

import { FilmCard } from "./FilmCard";

function Favourite() {
  const dispatch = useDispatch();
  const { isDark } = useContext(ThemeContext);
  const favoriteFilms = useSelector(selector("fav"));

  const deleteFavorites = () => {
    dispatch(clearFavoriteMovies());
    removeDataFromLS(LSkey("fav"));
  };

  return (
    <div className={isDark ? "main_black" : "main"}>
      <h2 className="main_title">Your favourite films</h2>
      {favoriteFilms.length ? (
        <>
          <button onClick={deleteFavorites}>Clear</button>
          <ul className="films">
            {favoriteFilms.map((item) => (
              <FilmCard key={item.imdbID} item={item} />
            ))}
          </ul>
        </>
      ) : (
        <h3 className="main_title">No films.</h3>
      )}
    </div>
  );
}

export { Favourite };
