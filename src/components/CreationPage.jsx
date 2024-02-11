import Header from "./Header.jsx";
import IndexSection from "./IndexSection.jsx";
import CardPreview from "./CardPreview.jsx";
import Footer from "./Footer.jsx";
import Form from "./Form.jsx";

function CreationPage() {
  return (
    <div className="container">
      <Header />
      <main className="main">
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

export default CreationPage;
