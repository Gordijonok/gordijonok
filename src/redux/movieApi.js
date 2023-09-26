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
      transformResponse: (data) => {
        const transformedData = {};
        for (const key in data) {
          transformedData[key[0].toLowerCase() + key.slice(1)] = data[key];
        }
        return transformedData;
      },
    }),
    getallMovie: builder.query({
      query: () => `?apikey=${API_KEY}&type=movie&s=sunshine`,
      transformResponse: (data) => {
        const transformedData = [];
        for (let i = 0; i < data.Search.length; i++) {
          const obj = {};
          for (const key in data.Search[i]) {
            obj[key[0].toLowerCase() + key.slice(1)] = data.Search[i][key];
          }
          transformedData.push(obj);
        }
        return transformedData;
      },
    }),
    getNameMovie: builder.query({
      query: (query) => `?apikey=${API_KEY}&type=movie&s=${query}`,
      transformResponse: (data) => {
        const transformedData = [];
        if (data.Error) {
          return false;
        }
        for (let i = 0; i < data.Search.length; i++) {
          const obj = {};
          for (const key in data.Search[i]) {
            obj[key[0].toLowerCase() + key.slice(1)] = data.Search[i][key];
          }
          transformedData.push(obj);
        }
        return transformedData;
      },
    }),
  }),
});

export const {
  useGetOneMovieQuery,
  useGetallMovieQuery,
  useGetNameMovieQuery,
} = movieApi;
