import Inputform from "./Inputform";

function Form({updateData}) {
  const handleInput = (event) => {
    updateData(event.currentTarget.name, event.currentTarget.value )
  }
  return (
    <>
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <Inputform
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
          onInput={handleInput}
        />
        <Inputform
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          onInput={handleInput}
        />
        <div className="addForm__2col">
          <Inputform
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
            onInput={handleInput}
          />
          <Inputform
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
            onInput={handleInput}
          />
        </div>
        <Inputform
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
          onInput={handleInput}
        />
        <textarea
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
          onInput={handleInput}
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          className="addForm__input"
          type="text"
          name="author"
          id="author"
          placeholder="Nombre"
          onInput={handleInput}
        />
        <input
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
          onInput={handleInput}
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
    </>
  );
}

export default Form;
