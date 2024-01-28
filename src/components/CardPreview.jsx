function CardPreview(props) {
  return (
    <>
      <section className="preview">
        <div className="projectImage"></div>
        <article className="card">
          <h2 className="card__projectTitle">
            <span className="card__projectTitle--text">
              Personal project card
            </span>
          </h2>

          <div className="card__author">
            <div className="card__authorPhoto"></div>
            <p className="card__job">{props.job || "Fulltack Developer"}</p>
            <h3 className="card__name">
              {props.author || "Emmelie Bjôrklund"}
            </h3>
          </div>

          <div className="card__project">
            <h3 className="card__name">
              {props.nameProject || "Elegant Workspace"}
            </h3>
            <p className="card__slogan">
              {props.slogan || "Diseños Exclusivos"}
            </p>
            <h3 className="card__descriptionTitle">Product description</h3>
            <p className="card__description">
              {props.description ||
                `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              quos? Itaque, molestias eveniet laudantium adipisci vitae ratione`}
            </p>

            <div className="card__technicalInfo">
              <p className="card__technologies">
                {" "}
                {props.tecnologies || "React JS - HTML - CSS"}
              </p>

              <a
                className="icon icon__www"
                href="#"
                title="Haz click para ver el proyecto online"
              >
                Web link
              </a>
              <a
                className="icon icon__github"
                href="#"
                title="Haz click para ver el código del proyecto"
              >
                GitHub link
              </a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default CardPreview;
