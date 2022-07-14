import { useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../store/modal";
import styles from "../styles/todoitem.module.css";
import randomColors from "../utils/colors";

const TodoItem = ({ key, ...item }) => {
  const [color, setColor] = useState(randomColors());
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <div onClick={() => setSelected(!selected)} className={styles.dropDown}>
        <div className={styles.small_circle_ctn}>
          <div
            style={{
              border: `3px solid ${color}`,
            }}
            className={styles.small_circle}
          />
        </div>
        <div className={styles.todo_item}>
          <div className={styles.todo_item_text}>
            <p>{item.text}</p>
          </div>
        </div>
        <div className={styles.day}>{item.day}</div>
      </div>
      <div className={`${styles.dropBox} ${selected ? styles.show : ""}`}>
        <button type="button" className={styles.completed_btn}>
          {item.completed ? "Completed" : "Mark as completed"}
        </button>
        <button
          onClick={() => dispatch(openModal("update"))}
          type="button"
          className={styles.update_todo}
        >
          Update Todo
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
