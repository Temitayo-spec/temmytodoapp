import { FaArrowLeft } from "react-icons/fa";
import UpdateForm from "../../comps/UpdateForm";

const update = () => {
  return (
    <div className="container">
      <button onClick={() => window.history.go(-1)} className="back_btn">
        <FaArrowLeft />
        <span>Back</span>
      </button>
      <h1 style={{ margin: "1em auto" }}>Update Goal</h1>
      <UpdateForm />
    </div>
  );
};

export default update;
