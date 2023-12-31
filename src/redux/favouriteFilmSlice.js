import { createSlice } from "@reduxjs/toolkit";

import { key, getDataFrom } from "../function/function.js";

const initialState = {
  favoriteMovies: getDataFrom(key("fav"), "[]"),
  isLoading: false,
  error: "",
};

const favoriteMoviesSlice = createSlice({
  name: "favoriteMovies",
  initialState,
  reducers: {
    addFavoriteMovie(state, action) {
      state.favoriteMovies.push(action.payload);
    },
    removeFavoriteMovie(state, action) {
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
    },
    clearFavoriteMovies(state) {
      state.favoriteMovies = [];
    },
    addAllFavoriteMovies(state, action) {
      state.favoriteMovies.push(...action.payload);
    },
  },
});
export const {
  addFavoriteMovie,
  removeFavoriteMovie,
  clearFavoriteMovies,
  addAllFavoriteMovies,
} = favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;
