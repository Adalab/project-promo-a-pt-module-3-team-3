import "../scss/App.scss";
import Header from "./Header.jsx";
import IndexSection from "./IndexSection.jsx";
import CardPreview from "./CardPreview.jsx";
import Footer from "./Footer.jsx";
import Form from "./Form.jsx";
import { useState } from "react";

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
  });

  const updateData = (fieldName, userValue) => {
    setData({...data,[ fieldName]: userValue})
  }

  
  return (
    <div className="container">
      <Header />

      <main className="main">
        <IndexSection />
        <CardPreview data={data}/>

        <form className="addForm">
          <Form
            updateData={updateData}
          />
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default App;
