import "../scss/App.scss";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./Landing.jsx";
import Create from "./Create.jsx";
import handleFetchCreate from "./services/onSubmit.js";

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
