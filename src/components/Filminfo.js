import { useParams } from "react-router-dom";

import { useGetOneMovieQuery } from "../redux/movieApi.js";

import { Likes } from "./Likes.js";

function Filminfo() {
  const paramsName = useParams().id;
  const { data } = useGetOneMovieQuery(paramsName);

  return (
    <div className="selected">
      <div className="selected__karta">
        <img src={data?.Poster} alt={data?.Title} />
        <Likes />
      </div>
      <div className="selected__text">
        <p>Title: {data?.Title}</p>
        <p>Year: {data?.Year}</p>
        <p>Country: {data?.Country}</p>
        <p>Released: {data?.Released}</p>
        <p>Runtime: {data?.Runtime}</p>
        <p>Genre: {data?.Genre}</p>
        <p>Released: {data?.Released}</p>
        <p>Actors: {data?.Actors}</p>
        <p>Director: {data?.Director}</p>
        <p>Description: {data?.Description}</p>
      </div>
    </div>
  );
}

export default Filminfo;
