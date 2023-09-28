import { useParams } from "react-router-dom";

import { useGetOneMovieQuery } from "../redux/movieApi.js";

import { Likes } from "./Likes.js";

function Filminfo() {
  const paramsName = useParams().id;
  const { data } = useGetOneMovieQuery(paramsName);

  return (
    <div className="selected">
      <div className="selected__karta">
        <img src={data?.poster} alt={data?.pitle} />
        <Likes film={data ?? {}} />
      </div>
      <div className="selected__text">
        <p>Title: {data?.title}</p>
        <p>Year: {data?.year}</p>
        <p>Country: {data?.country}</p>
        <p>Released: {data?.released}</p>
        <p>Runtime: {data?.runtime}</p>
        <p>Genre: {data?.genre}</p>
        <p>Released: {data?.released}</p>
        <p>Actors: {data?.actors}</p>
        <p>Director: {data?.director}</p>
        <p>Description: {data?.plot}</p>
      </div>
    </div>
  );
}

export default Filminfo;
