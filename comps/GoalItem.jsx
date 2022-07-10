import { useDispatch } from "react-redux";
import { deleteGoal, setId } from "../store/goals";
import Link from "next/link";
import styles from "../styles/goalitem.module.css";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <Link href={`/update/${goal?._id}`}>
        <div onClick={()=> dispatch(setId(goal?._id))} className={styles.goal}>
          {new Date(goal?.createdAt).toLocaleString("en-US")}
          <h2>{goal?.text}</h2>
        </div>
      </Link>
      <button onClick={() => dispatch(deleteGoal(goal?._id))} className={styles.close}>
        X
      </button>
    </div>
  );
};

export default GoalItem;
