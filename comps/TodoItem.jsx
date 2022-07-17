import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { openModal } from "../store/modal";
import {
  reset,
  setId,
  setTodoDetails,
  setTodoToCompleted,
} from "../store/todos";
import styles from "../styles/todoitem.module.css";
import randomColors from "../utils/colors";
import Loader from "./Loader";

const TodoItem = ({ key, ...item }) => {
  const [color, setColor] = useState(randomColors());
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <div
        onClick={() => {
          setSelected(!selected);
          dispatch(setId(item._id));
          dispatch(openModal("view"));
          dispatch(setTodoDetails({ ...item }));
        }}
        className={styles.dropDown}
      >
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
            <p>{item.todo}</p>
          </div>
        </div>
        <div className={styles.day}>{item.day}</div>
      </div>
    </div>
  );
};

export default TodoItem;
