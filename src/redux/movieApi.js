import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_KEY } from "../components/const/const";

import {
  doDataLowerCaseID,
  doDataLowerCase,
  doDataLowerCaseS,
} from "./functionTransformRespons";

export const movieApi = createApi({
  reducerPath: "kinopoisk/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://www.omdbapi.com/",
  }),
  endpoints: (builder) => ({
    getOneMovie: builder.query({
      query: (query) => `?apikey=${API_KEY}&i=${query}`,
      transformResponse: doDataLowerCaseID,
    }),
    getallMovie: builder.query({
      query: () => `?apikey=${API_KEY}&type=movie&s=sunshine`,
      transformResponse: doDataLowerCase,
    }),
    getNameMovie: builder.query({
      query: (query) => `?apikey=${API_KEY}&type=movie&s=${query}`,
      transformResponse: doDataLowerCaseS,
    }),
  }),
});

export const {
  useGetOneMovieQuery,
  useGetallMovieQuery,
  useGetNameMovieQuery,
} = movieApi;
