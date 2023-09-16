import { useState, useEffect } from "react";

import axios from "axios";

import { Films } from "./Films.js";

const url = "http://www.omdbapi.com/?apikey=5b7ac53d&type=movie&s=";
const urlMenu = url + "sunshine";

function Main({ film, setFilm }) {
  const [urlfilm, setUrlfilm] = useState(urlMenu);

  useEffect(() => {
    axios.get(urlfilm).then((resp) => {
      setFilm(resp.data.Search);
    });
  }, [setFilm, urlfilm]);

  function searchFilms(e) {
    if (e.target.value === "") {
      setUrlfilm(urlMenu);
      return;
    }
    const newurl = url + e.target.value;
    setUrlfilm(newurl);
  }

  return (
    <div className="main">
      <h2 className="main_title">Movie searching</h2>
      <input
        onChange={(e) => searchFilms(e)}
        className="main__input"
        type="text"
        placeholder="search movie"
      />
      <Films films={film} />
    </div>
  );
}

export default Main;
