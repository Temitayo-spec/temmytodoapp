import { useEffect } from "react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, isOpen, resetModal, type } from "../store/modal";
import { createTodo } from "../store/todos";
import styles from "../styles/add.module.css";
import Loader from "./Loader";
import Popup from "./Popup";

const AddTaskModal = () => {
  const open = useSelector(isOpen);
  const typeOf = useSelector(type);
  const dispatch = useDispatch();
  const fileRef = useRef();
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");
  const isSuccess = useSelector((state) => state.todo.isSuccess);
  const isLoading = useSelector((state) => state.todo.isLoading);
  const message = useSelector((state) => state.todo.message);
  const isError = useSelector((state) => state.todo.isError);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", fileRef.current.files[0]);
    formData.append("todo", task);
    formData.append("day", day);
    dispatch(createTodo(formData));
  };

  useEffect(() => {
    if (isSuccess && typeOf === "add") {
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "success",
        message: "Task Added Successfully",
      }));
      dispatch(closeModal());
      dispatch(resetModal());
    }
    if (isError && typeOf === "add") {
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "error",
        message: "Network Error",
      }));
    }
  }, [
    isSuccess === true && typeOf === "add",
    isError === true && typeOf === "add",
  ]);

  const [image, setImage] = useState("");

  const displayImage = () => {
    if (fileRef?.current?.files[0]) {
      setImage(URL.createObjectURL(fileRef.current.files[0]));
    }
    return "/demo-pic.png";
  };
  return (
    <>
      <Popup {...popupDetails} closePopup={closePopup} />
      {open && typeOf === "add" && (
        <div className={styles.wrapper}>
          <div className={styles.bg} />
          <form onSubmit={handleSubmit} className={styles.main}>
            <div className={styles.header}>
              <h1>Add Task</h1>
            </div>
            <div className={styles.add_task}>
              <div className={styles.add_image}>
                <label htmlFor="file">
                  <div className={styles.img}>
                    {image ? (
                      <img src={image} alt="add_image" />
                    ) : (
                      <p>You can add an image to your task.</p>
                    )}
                  </div>
                </label>
                <div className={styles.pic_btn}>
                  <button onClick={() => fileRef.current.click()} type="button">
                    Add an image
                  </button>
                  <button
                    onClick={() => {
                      setImage("");
                    }}
                    type="button"
                  >
                    Remove
                  </button>
                </div>
                <input
                  onChange={displayImage}
                  ref={fileRef}
                  type="file"
                  id="file"
                />
              </div>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />

              {/* Select day */}

              <div className={styles.select_day}>
                <label htmlFor="select">Day</label>
                <select
                  onChange={(e) => setDay(e.target.value)}
                  className={styles.select}
                >
                  <option disabled selected value="Select day">
                    Select day
                  </option>
                  <option value="Today">Today</option>
                  <option value="Tomorrow">Tomorrow</option>
                </select>
              </div>
              <div className={styles.button_ctn}>
                <button
                  disabled={isLoading === true}
                  type="submit"
                  className={styles.add_btn}
                >
                  Add task <span>{isLoading ? <Loader ml={10} /> : ""}</span>
                </button>
                <button
                  disabled={isLoading === true}
                  onClick={() => dispatch(closeModal())}
                  className={styles.cancel_btn}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddTaskModal;
