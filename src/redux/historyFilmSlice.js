import { createSlice } from "@reduxjs/toolkit";

import { LSkey, getDataFromLS } from "../function/function.js";

const initialState = {
  historyMovies: getDataFromLS(LSkey("history"), "[]"),
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
    clearHistoryMovies(state) {
      state.historyMovies = [];
    },
    addAllHistoryMovies(state, action) {
      state.historyMovies.push(...action.payload);
    },
  },
});
export const { addAllHistoryMovies, addHistoryMovies, clearHistoryMovies } =
  historyMoviesSlice.actions;
export default historyMoviesSlice.reducer;
