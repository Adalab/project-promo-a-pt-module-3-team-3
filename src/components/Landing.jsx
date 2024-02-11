function Landing() {
  return (
    <div className="hero__landing">
      <section className="hero__content">
        <h1 className="content__title">Titulo del proyecto</h1>
        <p className="content__slogan">
          Tu biblioteca digital para compartir y explorar proyectos sobre...
        </p>
        <div className="buttons__landing">
          <div className="content__button">
            <a className="button__a" href="#">
              ¡Comparte tu proyecto!
            </a>
          </div>
          <div className="content__button">
            <a className="button__a" href="#">
              Descubre proyectos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
