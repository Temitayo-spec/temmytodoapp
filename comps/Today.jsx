import { FaPlus, FaUndoAlt } from "react-icons/fa";
import styles from "../styles/today.module.css";
import AddTask from "./AddTask";
import AddTaskModal from "./AddTaskModal";
import TodoItem from "./TodoItem";

const Today = () => {
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
            <h1>Today Todos</h1>
          </div>
          {item.map((item) => {
            return (
              <>
                {item.day === "Today" ? (
                  <TodoItem key={item.id} {...item} />
                ) : null}
              </>
            );
          })}
          <AddTask />
        </div>
      </div>
    </>
  );
};

export default Today;
