import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";

import { Likes } from "./Likes.js";

function Filminfo() {
  const [selectedFilm, setSelectedFilm] = useState({});
  const url = "http://www.omdbapi.com/?apikey=5b7ac53d";
  const paramsName = useParams().id;
  useEffect(() => {
    axios.get(url, { params: { i: paramsName } }).then((respons) => {
      setSelectedFilm(respons.data);
    });
  }, []);

  return (
    <div className="selected">
      <div className="selected__karta">
        <img src={selectedFilm.Poster} alt={selectedFilm.Title} />
        <Likes />
      </div>
      <div className="selected__text">
        <p>Title: {selectedFilm.Title}</p>
        <p>Year: {selectedFilm.Year}</p>
        <p>Country: {selectedFilm.Country}</p>
        <p>Released: {selectedFilm.Released}</p>
        <p>Runtime: {selectedFilm.Runtime}</p>
        <p>Genre: {selectedFilm.Genre}</p>
        <p>Released: {selectedFilm.Released}</p>
        <p>Actors: {selectedFilm.Actors}</p>
        <p>Director: {selectedFilm.Director}</p>
        <p>Description: {selectedFilm.Description}</p>
      </div>
    </div>
  );
}

export default Filminfo;
