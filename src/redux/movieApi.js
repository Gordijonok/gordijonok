import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_KEY } from "../components/const/const";

export const movieApi = createApi({
  reducerPath: "kinopoisk/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://www.omdbapi.com/",
  }),
  endpoints: (builder) => ({
    getOneMovie: builder.query({
      query: (query) => ({
        url: `?apikey=${API_KEY}&i=${query}`,
      }),
    }),
  }),
});

export const { useGetOneMovieQuery } = movieApi;
