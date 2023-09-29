import PropTypes from "prop-types";

import { useGetNameMovieQuery } from "../redux/movieApi.js";

import { Loading } from "./Loading.js";
import { FilmCard } from "./FilmCard.js";

function SearchedFilms({ debName, isShowSuggest }) {
  const { data, isFetching } = useGetNameMovieQuery(debName);

  return (
    <div className="contain">
      {!isFetching && data && isShowSuggest ? (
        <div className="cagest">
          <ul className="cagest_films">
            {data.slice(0, 5).map((item) => (
              <div key={item.imdbID} className="searchitem">
                <FilmCard item={item} />
                <h6 className="searchtitle">{item.title}</h6>
              </div>
            ))}
          </ul>
        </div>
      ) : null}
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
