import { useState, useEffect, useContext } from "react";

import axios from "axios";

import { ErrorBoundary } from "../components/ErrorBoundary.js";
import { ErrorFallback } from "../components/ErrorFallback.js";

import { Films } from "./Films.js";
import { ThemeContext } from "./ThemeProvider.js";

const url = "http://www.omdbapi.com/?apikey=5b7ac53d&type=movie&s=";
const urlMenu = url + "sunshine";

function Main() {
  const { isDark } = useContext(ThemeContext);
  const [films, setFilm] = useState([]);
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
    setUrlfilm(url + e.target.value);
  }

  return (
    <div className={isDark ? "main_black" : "main"}>
      <h2 className="main_title">Movie searching</h2>
      <input
        onChange={(e) => searchFilms(e)}
        className="main__input"
        type="text"
        placeholder="search movie"
      />
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Films films={films} />
      </ErrorBoundary>
    </div>
  );
}

export default Main;
