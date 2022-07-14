import { FaPlus, FaUndoAlt } from "react-icons/fa";
import styles from "../styles/completed.module.css";
import AddTask from "./AddTask";
import AddTaskModal from "./AddTaskModal";
import TodoItem from "./TodoItem";

const Completed = () => {
  const item = [
    {
      id: 1,
      text: "Figure out how to make Todolist black",
      day: "Today",
      completed: false,
    },
    {
      id: 2,
      text: "Buy oranges",
      day: "Today",
      completed: true,
    },
    {
      id: 3,
      text: "Swimming exercise",
      day: "Tomorrow",
      completed: false,
    },
  ];
  return (
    <>
    <AddTaskModal />
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.header}>
            <h1>Completed Todos</h1>
          </div>
          {item.map((item) => {
            return (
              <>
                {item.completed ? <TodoItem key={item.id} {...item} /> : null}
              </>
            );
          })}
          <div className={styles.add_task}>
            <FaPlus className={styles.icon} />
            <button className={styles.add_btn}>Add task</button>
            <FaUndoAlt className={styles.icon} />
          </div>
        </div>
      </div>
      <AddTask />
    </>
  );
};

export default Completed;
