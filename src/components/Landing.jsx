import { Link } from "react-router-dom";

function Landing() {
  return (
    <section className="hero__content">
      <h1 className="content__title">Natura Puzzle</h1>
      <p className="content__slogan">
        Construye un Mundo Sostenible Pieza a Pieza
      </p>
      <div className="content__button">
        <Link to="/create/" className="button__a" href="#">
          ¡A Jugar!
        </Link>
      </div>
    </section>
  );
}

export default Landing;
