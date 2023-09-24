import { useGetNameMovieQuery } from "../redux/movieApi.js";

import { Loading } from "./Loading.js";
import { FilmCard } from "./FilmCard.js";

function SearchedFilms({ debName }) {
  const { data, isLoading } = useGetNameMovieQuery(debName);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="films">
          {data.Search.map((item) => (
            <FilmCard key={item.imdbID} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}

export { SearchedFilms };
