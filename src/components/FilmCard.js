import { Link } from "react-router-dom";

import { Likes } from "./Likes";
export function FilmCard({ item }) {
  return (
    <li key={item.imdbID} className="film">
      <Link to={`/filmInfo/${item.imdbID}`}>
        <img src={item.Poster} alt={item.Title} />{" "}
      </Link>
      <Likes film={item} />
    </li>
  );
}
