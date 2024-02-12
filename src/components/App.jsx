import "../scss/App.scss";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useState, useEffect} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./Landing.jsx";
import Create from "./Create.jsx";
import handleFetchCreate from "../services/onSubmit.js";
import {get, set} from "../services/localStorage.js"

function App() {
  const [data, setData] = useState({
    name: "",
    slogan: "",
    technologies: "",
    repo: "",
    demo: "",
    desc: "",
    author: "",
    job: "",
    image: "",
    photo: "",
  });

  const [dataResponse, setDataResponse] = useState("");

  const [name, setName] = useState(get("data", {}).name || "");
  //crear una variable de estado para cada una de las propiedades del objeto data.

  //EXPLICACIÓN DE LO QUE PONE DENTRO DE USESTATE ():

  // Con get("data", {})    ---------  leemos la propiedad "data" de localStorage y su contenido ({}).
  // Con .name   ------  leemos la propiedad name del objeto que nos devuelve.
  // Si todo esto existe, lo ponemos como valor inicial de la variable name.
  // Con || " "  ------------ Indicamos que si no existe, ponemos un string vacío.

  useEffect(() => {
    // Guardamos en el local storage el objeto data con las propiedades que necesitamos.
    set("data", {
      name: name,
      //faltan añadir todas
    });
  }, [name]); //añadimos todas las constantes para que se realice el set siempre que varíen.



  const updateData = (fieldName, userValue) => {
    setData({ ...data, [fieldName]: userValue });
  };

  const updateAvatar = (fieldName, image) => {
    setData({ ...data, [fieldName]: image });
  };

  const createProject = () => {
    data.autor = data.author;
    delete data.author;
    handleFetchCreate(data).then((dataResponse) => {
      console.log(dataResponse);
      setDataResponse(dataResponse);
    });
  };

  return (
    <div className="container">
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route
            path="/create/"
            element={
              <Create
                data={data}
                updateAvatar={updateAvatar}
                updateData={updateData}
                onSubmit={createProject}
                setDataResponse={setDataResponse}
                dataResponse={dataResponse}
              />
            }
          ></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
