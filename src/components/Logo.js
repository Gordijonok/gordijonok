import home from "../img/home.png";
import sun from "../img/sun.png";
import moon from "../img/moon.png";

function Logo({ black, setBlack }) {
  return (
    <div class="logo">
      <a href="/">
        <img className="logo__home" src={home} alt="home" />
      </a>
      <img
        className="logo__sun"
        onClick={() => setBlack((black) => !black)}
        src={black ? sun : moon}
        alt="sun"
      />
    </div>
  );
}

export { Logo };
