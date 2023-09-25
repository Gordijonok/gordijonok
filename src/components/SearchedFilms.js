import { useGetNameMovieQuery } from "../redux/movieApi.js";

import { Loading } from "./Loading.js";
import { FilmCard } from "./FilmCard.js";

function SearchedFilms({ debName }) {
  const { data, isFetching } = useGetNameMovieQuery(debName);

  console.log(data);

  return (
    <div>
      {isFetching ? (
        <Loading />
      ) : data.Search ? (
        <ul className="films">
          {data.Search.map((item) => (
            <FilmCard key={item.imdbID} item={item} />
          ))}
        </ul>
      ) : (
        <h3 className="main_title">No films.</h3>
      )}
    </div>
  );
}

export { SearchedFilms };
