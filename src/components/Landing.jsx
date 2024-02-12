import { Link } from "react-router-dom";

function Landing() {
  return (
    <section class="hero__content">
      <h1 class="content__title">Natura Puzzle</h1>
      <p class="content__slogan">Construye un Mundo Sostenible Pieza a Pieza</p>
      <div class="content__button">
        <Link to="/create/" class="button__a" href="#">
          ¡A Jugar!
        </Link>
      </div>
    </section>
  );
}

export default Landing;
