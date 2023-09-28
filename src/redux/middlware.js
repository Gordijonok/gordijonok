import { LSkey, setDataToLS } from "../function/function";

export const LSMiddleware = (state) => (next) => (action) => {
  const initialState = state.getState();
  const favorite = initialState.favoriteMovies.favoriteMovies;
  if (action.type === "favoriteMovies/addFavoriteMovie") {
    const addLike = [...favorite, action.payload];
    setDataToLS(LSkey("fav"), addLike);
  }
  return next(action);
};
