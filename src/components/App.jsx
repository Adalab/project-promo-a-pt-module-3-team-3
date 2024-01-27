import "../scss/App.scss";
import Header from "./Header.jsx";
import logo from "../images/adalab.png";
import { useState } from "react";
import IndexSection from "./IndexSection.jsx";
import CardPreview from "./CardPreview.jsx";
import Footer from "./Footer.jsx";

function App() {
  //  Parte Vir

  const [author, setAuthor] = useState();
  const [job, setJob] = useState();

  const handleClickAuthorName = (event) => {
    setAuthor(event.currentTarget.value);
  };
  const handleClickJob = (event) => {
    setJob(event.currentTarget.value);
  };

  // Parte Vir

  return (
    <div className="container">
      <Header />

      <main className="main">
        <IndexSection />
        <CardPreview job={job} author={author} />

        <form className="addForm">
          <h2 className="title">Información</h2>
          <fieldset className="addForm__group">
            <legend className="addForm__title">
              Cuéntanos sobre el proyecto
            </legend>
            <input
              className="addForm__input"
              type="text"
              name="name"
              id="name"
              placeholder="Nombre del proyecto"
            />
            <input
              className="addForm__input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
            />
            <div className="addForm__2col">
              <input
                className="addForm__input"
                type="url"
                name="repo"
                id="repo"
                placeholder="Repositorio"
              />
              <input
                className="addForm__input"
                type="url"
                name="demo"
                id="demo"
                placeholder="Demo"
              />
            </div>
            <input
              className="addForm__input"
              type="text"
              name="technologies"
              id="technologies"
              placeholder="Tecnologías"
            />
            <textarea
              className="addForm__input"
              type="text"
              name="desc"
              id="desc"
              placeholder="Descripción"
              rows="5"
            ></textarea>
          </fieldset>

          <fieldset className="addForm__group">
            <legend className="addForm__title">
              Cuéntanos sobre la autora
            </legend>
            <input
              className="addForm__input"
              type="text"
              name="autor"
              id="autor"
              placeholder="Nombre"
              onInput={handleClickAuthorName}
            />
            <input
              className="addForm__input"
              type="text"
              name="job"
              id="job"
              placeholder="Trabajo"
              onInput={handleClickJob}
            />
          </fieldset>

          <fieldset className="addForm__group--upload">
            <label htmlFor="image" className="button">
              Subir foto del proyecto
            </label>
            <input
              className="addForm__hidden"
              type="file"
              name="image"
              id="image"
            />
            <label htmlFor="photo" className="button">
              Subir foto de la autora
            </label>
            <input
              className="addForm__hidden"
              type="file"
              name="photo"
              id="photo"
            />
            <button className="button--large">Guardar proyecto</button>
          </fieldset>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default App;
