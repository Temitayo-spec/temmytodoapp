import { useDispatch } from "react-redux";
import { deleteGoal, setId } from "../store/goals";
import Link from "next/link";
import styles from "../styles/goalitem.module.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();
  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en-US");
  return (
    <div className={styles.wrapper}>
      <Link href={`/update/${goal?._id}`}>
        <div onClick={() => dispatch(setId(goal?._id))} className={styles.goal}>
          <p>
            {timeAgo.format(new Date(goal?.createdAt)) === "in a moment"
              ? "Just now"
              : timeAgo.format(new Date(goal?.createdAt))}
          </p>
          <h2>{goal?.text}</h2>
        </div>
      </Link>
      <button
        onClick={() => dispatch(deleteGoal(goal?._id))}
        className={styles.close}
      >
        X
      </button>
    </div>
  );
};

export default GoalItem;
