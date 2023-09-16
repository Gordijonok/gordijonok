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
      console.log(respons.data);
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
        <h4>Title: {selectedFilm.Title}</h4>
        <h4>Year: {selectedFilm.Year}</h4>
        <h4>Country: {selectedFilm.Country}</h4>
        <h4>Released: {selectedFilm.Released}</h4>
        <h4>Runtime: {selectedFilm.Runtime}</h4>
        <h4>Genre: {selectedFilm.Genre}</h4>
        <h4>Released: {selectedFilm.Released}</h4>
        <h4>Actors: {selectedFilm.Actors}</h4>
        <h4>Director: {selectedFilm.Director}</h4>
        <h4>Description: {selectedFilm.Description}</h4>
      </div>
    </div>
  );
}

export default Filminfo;
