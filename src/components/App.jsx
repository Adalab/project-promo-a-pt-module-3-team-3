import "../scss/App.scss";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./Landing.jsx";
import Create from "./Create.jsx";

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

  const updateData = (fieldName, userValue) => {
    setData({ ...data, [fieldName]: userValue });
  };
  // Falta cambiarlo en el cardPreview para que se cambie en la tarjeta////

  const updateAvatar = (fieldName, image) => {
    setData({ ...data, [fieldName]: image });
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
