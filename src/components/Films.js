import { Link } from "react-router-dom";

import { Likes } from "./Likes.js";

function Films({ films }) {
  if (!Array.isArray(films)) {
    return (
      <div className="main__no">
        <h3>Results of searching</h3>
        <h5> Something went wrong</h5>
      </div>
    );
  } else {
    const arrfilms = films.map((item) => {
      return (
        <li key={item.imdbID} className="film">
          <Link to={`/filmInfo/${item.imdbID}`}>
            <img src={item.Poster} alt={item.Title} />{" "}
          </Link>
          <Likes film={item} />
        </li>
      );
    });
    return <ul className="films">{arrfilms}</ul>;
  }
}

export { Films };
