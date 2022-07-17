import { FaPlus, FaUndoAlt } from "react-icons/fa";
import styles from "../styles/nextday.module.css";
import AddTask from "./AddTask";
import AddTaskModal from "./AddTaskModal";
import TodoItem from "./TodoItem";

const NextDay = ({ allTodos }) => {
  return (
    <>
      <AddTaskModal />
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.header}>
            <h1>Next 7 days</h1>
          </div>
          {allTodos === [] ? (
            <div className={styles.no_todos}>
              <h2>No Todos</h2>
              <p>Add a todo to get started</p>
            </div>
          ) : (
            <>
              {allTodos?.map((item) => {
                return (
                  <>
                    {item.day === "Tomorrow" ? (
                      <TodoItem key={item.id} {...item} />
                    ) : null}
                  </>
                );
              })}
            </>
          )}
          <AddTask />
        </div>
      </div>
    </>
  );
};

export default NextDay;
