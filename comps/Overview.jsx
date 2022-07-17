import { FaPlus, FaUndoAlt } from "react-icons/fa";
import styles from "../styles/overview.module.css";
import AddTask from "./AddTask";
import AddTaskModal from "./AddTaskModal";
import TodoItem from "./TodoItem";

const Overview = ({ allTodos }) => {
  return (
    <>
      <AddTaskModal />
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.header}>
            <h1>Overview</h1>
          </div>
          {/* Convert object to array */}
          {allTodos === [] ? (
            <div className={styles.no_todos}>
              <h2>No Todos</h2>
              <p>Add a todo to get started</p>
            </div>
          ) : (
            <>
              {allTodos?.map((item) => (
                <TodoItem key={item._id} {...item} />
              ))}
            </>
          )}

          <AddTask />
        </div>
      </div>
    </>
  );
};

export default Overview;
