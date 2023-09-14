import home from "../img/home.png";
import sun from "../img/sun.png";
import moon from "../img/moon.png";

function Logo({ black, setBlack }) {
  if (black) {
    return (
      <div class="logo">
        <a href="/">
          <img className="logo__home" src={home} alt="home" />
        </a>
        <a href="#">
          {" "}
          <img
            className="logo__sun"
            onClick={() => setBlack((black) => !black)}
            src={sun}
            alt="sun"
          />
        </a>
      </div>
    );
  } else {
    return (
      <div class="logo">
        <a href="/">
          <img className="logo__home" src={home} alt="home" />
        </a>
        <a href="#">
          {" "}
          <img
            className="logo__sun"
            onClick={() => setBlack((black) => !black)}
            src={moon}
            alt="sun"
          />
        </a>
      </div>
    );
  }
}

export { Logo };
