import { useContext } from "react";

import { useParams } from "react-router-dom";

import { FilmContext } from "../App.js";

import { Likes } from "./Likes.js";

function Filminfo() {
  const paramsName = useParams().id;
  const arrFilms = useContext(FilmContext);
  const selectedFilm = arrFilms.find((item) => item.imdbID === paramsName);
  return (
    <div className="selected">
      <div className="selected__karta">
        <img src={selectedFilm.Poster} alt={selectedFilm.Title} />
        <h4>Title: {selectedFilm.Title}</h4>
        <h4>Year: {selectedFilm.Year}</h4>
        <Likes />
      </div>
    </div>
  );
}

export default Filminfo;
