import { createSlice } from "@reduxjs/toolkit";

import { key, getDataFrom } from "../function/function.js";

const initialState = {
  historyMovies: getDataFrom(key("history"), "[]"),
};

export const historyMoviesSlice = createSlice({
  name: "historyMovies",
  initialState,
  reducers: {
    addHistoryMovies(state, action) {
      if (!state.historyMovies.includes(action.payload)) {
        state.historyMovies.push(action.payload);
      }
    },

    deleteHistoryMovies(state, action) {
      state.historyMovies = state.historyMovies.filter(
        (movie) => movie !== action.payload
      );
    },

    clearHistoryMovies(state) {
      state.historyMovies = [];
    },
    addAllHistoryMovies(state, action) {
      state.historyMovies.push(...action.payload);
    },
  },
});
export const {
  addAllHistoryMovies,
  addHistoryMovies,
  clearHistoryMovies,
  deleteHistoryMovies,
} = historyMoviesSlice.actions;
export default historyMoviesSlice.reducer;
