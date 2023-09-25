import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearFavoriteMovies } from "../redux/favouriteFilmSlice";
import { LSkey, removeDataFromLS } from "../function/function.js";
import { ThemeContext } from "../components/ThemeProvider";

import { FilmCard } from "./FilmCard";

function Favourite() {
  const dispatch = useDispatch();
  const { isDark } = useContext(ThemeContext);
  const favoriteFilms = useSelector(
    (state) => state.favoriteMovies.favoriteMovies
  );

  function deleteFavorites() {
    dispatch(clearFavoriteMovies());
    removeDataFromLS(LSkey("fav"));
  }

  if (favoriteFilms.length === 0)
    return (
      <div className={isDark ? "main_black" : "main"}>
        <h2 className="main_title">Your favourite films</h2>
        <h3 className="main_title">No films.</h3>
      </div>
    );

  return (
    <div className={isDark ? "main_black" : "main"}>
      <h2 className="main_title">Your favourite films</h2>
      <button onClick={() => deleteFavorites()}>Clear</button>
      <ul className="films">
        {favoriteFilms.map((item) => (
          <FilmCard item={item} />
        ))}
      </ul>
    </div>
  );
}

export { Favourite };
