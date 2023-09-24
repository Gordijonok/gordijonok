import { configureStore } from "@reduxjs/toolkit";

import { movieApi } from "./movieApi";
import favoriteMoviesReducer from "./favouriteFilmSlice";
import historyMoviesReducer from "./historyFilmSlice";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    favoriteMovies: favoriteMoviesReducer,
    historyMovies: historyMoviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
