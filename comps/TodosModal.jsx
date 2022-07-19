import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, isOpen, openModal, type } from "../store/modal";
import { reset, setTodoToCompleted } from "../store/todos";
import styles from "../styles/add.module.css";
import Loader from "./Loader";

const TodosModal = () => {
  const open = useSelector(isOpen);
  const typeOf = useSelector(type);
  const dispatch = useDispatch();

  const todoDetails = useSelector((state) => state.todo.todoDetails);
  const [load, setIsLoad] = useState(false);
  const isLoading = useSelector((state) => state.todo.isLoading);
  const id = useSelector((state) => state.todo.id);
  useEffect(() => {
    if (isLoading === false) {
      setIsLoad(false);
    }
  }, [isLoading === false]);
  console.log(todoDetails)

  return (
    <>
      {open && typeOf === "view" && todoDetails && (
        <div className={styles.wrapper}>
          <div className={styles.bg} />
          <form className={styles.main}>
            <div className={styles.header}>
              <h1>View Task</h1>
            </div>
            <div className={styles.add_task}>
              <div className={styles.add_image}>
                <div className={styles.img}>
                  {todoDetails?.image.data !== "" ? (
                    <img
                      src={`${
                        todoDetails?.image?.contentType === "image/png"
                          ? "data:image/png"
                          : "data:image/jpeg"
                      };base64,${todoDetails?.image?.data}`}
                      alt="add_image"
                    />
                  ) : (
                    <p>You can add an image to your task by updating Todo.</p>
                  )}
                </div>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  {todoDetails.todo}
                </p>
                <div className={styles.dropBox}>
                  <button
                    onClick={() => {
                      setIsLoad(true);
                      dispatch(setTodoToCompleted(id));
                    }}
                    type="button"
                    className={styles.completed_btn}
                  >
                    {todoDetails.completed === true
                      ? "Completed"
                      : "Mark as completed"}
                    <span>{load ? <Loader ml={10} /> : ""}</span>
                  </button>
                  <button
                    onClick={() => {
                      dispatch(reset());
                      dispatch(openModal("update"));
                    }}
                    type="button"
                    className={styles.update_todo}
                  >
                    Update Todo
                  </button>

                  <button
                    onClick={() => {
                      dispatch(reset());
                      dispatch(openModal("delete"));
                    }}
                    type="button"
                    className={styles.delete_todo}
                  >
                    Delete Todo
                  </button>
                  <button
                    onClick={() => {
                      dispatch(reset());
                      dispatch(closeModal());
                    }}
                    type="button"
                    className={styles.delete_todo}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default TodosModal;
