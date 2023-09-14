import head from "../img/head.png";

function Films({ films }) {
  const arrfilms = films.map((item) => {
    return (
      <li className="film">
        <img src={item.Poster} alt={item.Title} />
        <div className="head">
          <a className="film__head" href="#">
            ❤
          </a>
        </div>
      </li>
    );
  });
  return <ul className="films">{arrfilms}</ul>;
}

export { Films };
