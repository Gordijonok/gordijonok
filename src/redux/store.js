import { configureStore } from "@reduxjs/toolkit";

import { movieApi } from "./movieApi";
import favoriteMoviesReducer from "./favouriteFilmSlice";
import historyMoviesReducer from "./historyFilmSlice";
import { LSMiddleware } from "./middlware";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    favoriteMovies: favoriteMoviesReducer,
    historyMovies: historyMoviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware).concat(LSMiddleware),
});
