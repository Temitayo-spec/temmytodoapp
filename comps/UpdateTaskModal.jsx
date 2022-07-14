import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, isOpen, type } from "../store/modal";
import styles from "../styles/add.module.css";

const UpdateTaskModal = () => {
  const open = useSelector(isOpen);
  const typeOf = useSelector(type);
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const fileRef = useRef();

  const displayImage = () => {
    if (fileRef?.current?.files[0]) {
      setImage(URL.createObjectURL(fileRef.current.files[0]));
    }
    return "/demo-pic.png";
  };
  return (
    <>
      {open && typeOf === "update" && (
        <div className={styles.wrapper}>
          <div className={styles.bg} />
          <div className={styles.main}>
            <div className={styles.header}>
              <h1>Update Task</h1>
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
              />

              {/* Select day */}

              <div className={styles.select_day}>
                <label htmlFor="select">Day</label>
                <select className={styles.select}>
                  <option disabled selected value="Select day">
                    Select day
                  </option>
                  <option value="Today">Today</option>
                  <option value="Tomorrow">Tomorrow</option>
                </select>
              </div>
              <div className={styles.button_ctn}>
                <button className={styles.add_btn}>Add task</button>
                <button
                  onClick={() => dispatch(closeModal())}
                  className={styles.cancel_btn}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateTaskModal;
