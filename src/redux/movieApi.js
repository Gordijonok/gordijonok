import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_KEY } from "../components/const/const";

export const movieApi = createApi({
  reducerPath: "kinopoisk/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://www.omdbapi.com/",
  }),
  endpoints: (builder) => ({
    getOneMovie: builder.query({
      query: (query) => `?apikey=${API_KEY}&i=${query}`,
    }),
    getallMovie: builder.query({
      query: (query) => `?apikey=${API_KEY}&type=movie&s=sunshine`,
    }),
    getNameMovie: builder.query({
      query: (query) => `?apikey=${API_KEY}&type=movie&s=${query}`,
    }),
  }),
});

export const {
  useGetOneMovieQuery,
  useGetallMovieQuery,
  useGetNameMovieQuery,
} = movieApi;
