import IndexSection from "./IndexSection.jsx";
import CardPreview from "./CardPreview.jsx";
import Form from "./Form.jsx";
import PropTypes from "prop-types";

function Create({
  data,
  updateAvatar,
  updateData,
  setDataResponse,
  onSubmit,
  dataResponse,
}) {
  return (
    <>
      <IndexSection />
      <CardPreview data={data} />
      <form className="addForm">
        <Form
          updateData={updateData}
          updateAvatar={updateAvatar}
          setDataResponse={setDataResponse}
          responseFetch={dataResponse}
          onSubmit={onSubmit}
        />
      </form>
    </>
  );
}

Create.propTypes = {
  data: PropTypes.array,
  updateAvatar: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
};

export default Create;
