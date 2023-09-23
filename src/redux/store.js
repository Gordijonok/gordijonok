import { configureStore } from "@reduxjs/toolkit";

import { movieApi } from "./movieApi";
import favoriteMoviesReducer from "./favouriteFilmSlice";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    favoriteMovies: favoriteMoviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
