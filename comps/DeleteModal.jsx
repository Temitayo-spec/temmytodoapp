import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, isOpen, resetModal, type } from "../store/modal";
import { createTodo, deleteTodo, reset } from "../store/todos";
import styles from "../styles/deletemodal.module.css";
import Loader from "./Loader";
import Popup from "./Popup";

const DeleteModal = () => {
  const open = useSelector(isOpen);
  const typeOf = useSelector(type);
  const dispatch = useDispatch();
  const isSuccess = useSelector((state) => state.todo.isSuccess);
  const isLoading = useSelector((state) => state.todo.isLoading);
  const isError = useSelector((state) => state.todo.isError);
  const id = useSelector((state) => state.todo.id);
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
    dispatch(deleteTodo(id));
  };

  useEffect(() => {
    if (isSuccess && typeOf === "delete") {
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "success",
        message: "Task Deleted Successfully",
      }));
      dispatch(closeModal());
      dispatch(reset());
      dispatch(resetModal());
    }
    if (isError && typeOf === "delete") {
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "error",
        message: "Network Error",
      }));
      dispatch(reset());
    }
  }, [
    isSuccess === true && typeOf === "delete",
    isError === true && typeOf === "delete",
  ]);

  return (
    <>
      <Popup {...popupDetails} closePopup={closePopup} />
      {open && typeOf === "delete" && (
        <div className={styles.wrapper}>
          <div className={styles.bg} />
          <form onSubmit={handleSubmit} className={styles.main}>
            <div className={styles.header}>
              <h2>Are you sure you want to delete Todo?</h2>
              <div
                style={{
                  width: "auto",
                }}
                className={styles.button_ctn}
              >
                <button type="submit" className={styles.add_btn}>
                  Delete <span>{isLoading ? <Loader ml={10} /> : ""}</span>
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

export default DeleteModal;
