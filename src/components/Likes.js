import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getDataFrom, deleteLike, selectorFav } from "../function/function";

import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from "../redux/favouriteFilmSlice";

function Likes({ film }) {
  const isAuth = getDataFrom("isAuthorized", '""');
  const isAuthFav = isAuth + " fav";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(selectorFav);

  const isFav = !favoriteMovies.find(
    (favorite) => favorite.imdbID === film.imdbID
  );

  const installike = () => {
    dispatch(addFavoriteMovie(film));
  };

  const instalDislike = () => {
    dispatch(removeFavoriteMovie(film));
    deleteLike(isAuthFav, film);
  };

  return (
    <>
      {!isAuth ? (
        <div onClick={() => navigate("/signin")} className="head">
          <span className="film__headlike">❤</span>
        </div>
      ) : isFav ? (
        <div onClick={installike} className="head">
          <span className="film__headlike">❤</span>
        </div>
      ) : (
        <div onClick={instalDislike} className="head">
          <span className="film__headdislaike">❤</span>
        </div>
      )}
    </>
  );
}

Likes.propTypes = {
  film: PropTypes.object,
};

export { Likes };
