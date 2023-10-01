import { key, setDataTo } from "../function/function";

export const LSMiddleware = (state) => (next) => (action) => {
  const { favoriteMovies } = state.getState().favoriteMovies;
  if (action.type === "favoriteMovies/addFavoriteMovie") {
    const addLike = [...favoriteMovies, action.payload];
    setDataTo(key("fav"), addLike);
  }
  return next(action);
};
