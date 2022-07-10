import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateGoals } from "../store/goals";
import { useRouter } from "next/router";
import Spinner from "../comps/Spinner";
import Popup from "../comps/Popup";

const UpdateForm = () => {
  const [text, setText] = useState("");
  const [popupDetails, setPopupDetails] = useState({
    open: false,
    severity: "",
    message: "",
  });

  const closePopup = () => {
    setPopupDetails((prevState) => ({
      ...prevState,
      open: false,
    }));
  };
  const dispatch = useDispatch();
  const router = useRouter();
  const isSuccess = useSelector((state) => state.goal.isSuccess);
  const isError = useSelector((state) => state.goal.isError);
  const isLoading = useSelector((state) => state.goal.isLoading);
  const message = useSelector((state) => state.goal.message);

  const id = useSelector((state) => state.goal.id);
  useEffect(() => {
    console.log(id);
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    if (isSuccess) {
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "success",
        message: "Goal Updated",
      }));
      router.push("/dashboard");
    }
    if (isError) {
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "error",
        message: "Network Error",
      }));
    }

    if (isError) {
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "error",
        message: message,
      }));
    }

    if (text === "") {
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "error",
        message: "Please enter a goal",
      }));
    } else {
      const updateDetails = {
        goalId: id,
        text,
      };
      dispatch(updateGoals(updateDetails));
    }
    setText("");
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="form">
      <Popup
        open={popupDetails.open}
        message={popupDetails.message}
        severity={popupDetails.severity}
        closePopup={closePopup}
      />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateForm;
