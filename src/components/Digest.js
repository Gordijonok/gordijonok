import { useGetNameMovieQuery } from "../redux/movieApi.js";

import { SearchedFilms } from "./SearchedFilms.js";
import { FilmCard } from "./FilmCard.js";
import { Loading } from "./Loading.js";

function Digest({ debName, isShowSuggest }) {
  const { data, isFetching, isLoading } = useGetNameMovieQuery(debName);

  return (
    <div className="contain">
      {isLoading ? (
        <Loading />
      ) : !data ? (
        <h3 className="main_title">No films.</h3>
      ) : !isFetching && data && isShowSuggest ? (
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
      ) : (
        <SearchedFilms debName={debName} />
      )}
    </div>
  );
}

export { Digest };
