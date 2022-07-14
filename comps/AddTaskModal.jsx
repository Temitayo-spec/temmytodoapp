import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, isOpen, type } from "../store/modal";
import { createTodo } from "../store/todos";
import styles from "../styles/add.module.css";
import Loader from "./Loader";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", fileRef.current.files[0]);
    formData.append("todo", task);
    formData.append("day", day);
    dispatch(createTodo(formData));

    isSuccess && dispatch(closeModal());
    isError && setTask("");
  };

  const [image, setImage] = useState("");

  const displayImage = () => {
    if (fileRef?.current?.files[0]) {
      setImage(URL.createObjectURL(fileRef.current.files[0]));
    }
    return "/demo-pic.png";
  };
  return (
    <>
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
                <button type="submit" className={styles.add_btn}>
                  Add task <span>{isLoading ? <Loader ml={10} /> : ""}</span>
                </button>
                <button
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
