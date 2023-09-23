import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { getDataFromLS, setDataToLS, deleteLike } from "../function/function";

import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from "../redux/favouriteFilmSlice";

function Likes({ film }) {
  const isAuth = getDataFromLS("isAuthorized", '""');
  const isAuthFav = isAuth + " fav";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(
    (state) => state.favoriteMovies.favoriteMovies
  );

  const isFav = !favoriteMovies.find(
    (favorite) => favorite.imdbID === film.imdbID
  );

  function installike() {
    if (isAuth) {
      dispatch(addFavoriteMovie(film));
      setDataToLS(isAuthFav, [...getDataFromLS(isAuthFav, '""'), film]);
    } else {
      navigate("/signin");
    }
  }

  function instalDislike() {
    if (isAuth) {
      dispatch(removeFavoriteMovie(film));
      deleteLike(isAuthFav, film);
    } else {
      navigate("/signin");
    }
  }

  return (
    <>
      {isFav ? (
        <div onClick={() => installike()} className="head">
          <span className="film__headlike">❤</span>
        </div>
      ) : (
        <div onClick={() => instalDislike()} className="head">
          <span className="film__headdislaike">❤</span>
        </div>
      )}
    </>
  );
}

export { Likes };
