import PropTypes from "prop-types";

import { useGetNameMovieQuery } from "../redux/movieApi.js";

import { Loading } from "./Loading.js";
import { FilmCard } from "./FilmCard.js";

function SearchedFilms({ debName }) {
  const { data, isFetching } = useGetNameMovieQuery(debName);

  return (
    <div className="contain">
      {isFetching ? (
        <Loading />
      ) : data ? (
        <ul className="films">
          {data.map((item) => (
            <FilmCard key={item.imdbID} item={item} />
          ))}
        </ul>
      ) : (
        <h3 className="main_title">No films.</h3>
      )}
    </div>
  );
}

SearchedFilms.propTypes = {
  debName: PropTypes.string,
};

export { SearchedFilms };
