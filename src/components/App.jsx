import "../scss/App.scss";

import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./Landing.jsx";
import CreationPage from "./CreationPage.jsx";

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

  const updateAvatar = (fieldName, image) => {
    setData({ ...data, [fieldName]: image });
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/create"
          element={
            <CreationPage
              data={data}
              updateData={updateData}
              updateAvatar={updateAvatar}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
