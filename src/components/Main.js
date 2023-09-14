import { useState, useEffect } from "react";

import axios from "axios";

import { Films } from "./Films.js";

const src = "http://www.omdbapi.com/?apikey=5b7ac53d&s=sunshine&type=movie";

function Main() {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    axios.get(src).then((resp) => {
      setFilm(resp.data.Search);
    });
  }, []);

  return (
    <div className="main">
      <h2 className="main_title">Movie searching</h2>
      <input className="main__input" type="text" placeholder="search movie" />
      <Films films={film} />
    </div>
  );
}

export { Main };
