import { Link } from "react-router-dom";

import { Likes } from "./Likes";
export function FilmCard({ item }) {
  return (
    <li key={item.imdbID} className="film">
      <Link to={`/filmInfo/${item.imdbID}`}>
        <img src={item.poster} alt={item.title} />{" "}
      </Link>
      <Likes film={item} />
    </li>
  );
}
