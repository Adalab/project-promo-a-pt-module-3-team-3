import "../scss/App.scss";
import Header from "./Header.jsx";
import IndexSection from "./IndexSection.jsx";
import CardPreview from "./CardPreview.jsx";
import Footer from "./Footer.jsx";
import Form from "./Form.jsx";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./Landing.jsx";

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
          <Route path="/" element={<Landing/>}></Route>
        </Routes>
        <IndexSection />
        <CardPreview data={data} />

        <form className="addForm">
          <Form updateData={updateData} updateAvatar={updateAvatar} />
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default App;
