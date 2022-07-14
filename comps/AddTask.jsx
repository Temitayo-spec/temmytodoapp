import { FaPlus, FaUndoAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openModal } from "../store/modal";
import styles from "../styles/overview.module.css";

const AddTask = () => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(openModal("add"))} className={styles.add_task}>
      <FaPlus className={styles.icon} />
      <button className={styles.add_btn}>Add task</button>
      <FaUndoAlt className={styles.icon} />
    </div>
  );
};

export default AddTask;
