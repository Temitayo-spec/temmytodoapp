import { FaPlus, FaUndoAlt } from "react-icons/fa";
import styles from "../styles/completed.module.css";
import AddTask from "./AddTask";
import AddTaskModal from "./AddTaskModal";
import TodoItem from "./TodoItem";

const Completed = ({ allTodos }) => {
  return (
    <>
      <AddTaskModal />
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.header}>
            <h1>Completed Todos</h1>
          </div>
          {allTodos === [] ? (
            <div className={styles.no_todos}>
              <h2>No Todos</h2>
              <p>Add a todo to get started</p>
            </div>
          ) : (
            <>
              {allTodos?.map((item, key) => {
                return (
                  <>
                    <>
                      {item.completed ? <TodoItem key={key} {...item} /> : null}
                    </>
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

export default Completed;
