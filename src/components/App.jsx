import "../scss/App.scss";
import Header from "./Header.jsx";
import IndexSection from "./IndexSection.jsx";
import CardPreview from "./CardPreview.jsx";
import Footer from "./Footer.jsx";
import Form from "./Form.jsx";
import { useState } from "react";

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
          <Form
            handleClickAuthorName={handleClickAuthorName}
            handleClickJob={handleClickJob}
          />
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default App;
