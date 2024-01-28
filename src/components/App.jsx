import "../scss/App.scss";
import Header from "./Header.jsx";
import IndexSection from "./IndexSection.jsx";
import CardPreview from "./CardPreview.jsx";
import Footer from "./Footer.jsx";
import Form from "./Form.jsx";
import { useState } from "react";

function App() {
  //  Parte Vir

  //const projectData = [];

  const [author, setAuthor] = useState();
  const [job, setJob] = useState();

  const handleClickAuthorName = (event) => {
    setAuthor(event.currentTarget.value);
  };
  const handleClickJob = (event) => {
    setJob(event.currentTarget.value);
  };

  // Parte Vir

  // Parte Sara conectar formulario a tarjeta

  const [nameProject, setNameProject] = useState();
  const [slogan, setSlogan] = useState();
  const [description, setDescription] = useState();
  const [tecnologies, setTecnologies] = useState();
  const [githubLink, setGithubLink] = useState();
  const [projectLink, setProjectLink] = useState();

  const handleInputNameProject = (event) => {
    setNameProject(event.currentTarget.value);
  };
  const handleInputSlogan = (event) => {
    setSlogan(event.currentTarget.value);
  };
  const handleInputDescription = (event) => {
    setDescription(event.currentTarget.value);
  };
  const handleInputTecnologies = (event) => {
    setTecnologies(event.currentTarget.value);
  };
  const handleInputGithubLink = (event) => {
    setGithubLink(event.currentTarget.value);
  };
  const handleInputProjectLink = (event) => {
    setProjectLink(event.currentTarget.value);
  };

  return (
    <div className="container">
      <Header />

      <main className="main">
        <IndexSection />
        <CardPreview
          job={job}
          author={author}
          nameProject={nameProject}
          slogan={slogan}
          description={description}
          tecnologies={tecnologies}
          githubLink={githubLink}
          projectLink={projectLink}
        />

        <form className="addForm">
          <Form
            handleClickAuthorName={handleClickAuthorName}
            handleClickJob={handleClickJob}
            handleInputNameProject={handleInputNameProject}
            handleInputSlogan={handleInputSlogan}
            handleInputDescription={handleInputDescription}
            handleInputTecnologies={handleInputTecnologies}
            handleInputGithubLink={handleInputGithubLink}
            handleInputProjectLink={handleInputProjectLink}
          />
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default App;
