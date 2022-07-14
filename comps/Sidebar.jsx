import { FaCalendarAlt, FaCalendarCheck, FaCalendarDay, FaPersonBooth } from "react-icons/fa";
import styles from "../styles/sidebar.module.css";

const Sidebar = ({ setTabs, tabs }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        <div
          onClick={() => setTabs(1)}
          className={`${styles.tab} ${tabs === 1 ? styles.active : ""}`}
        >
          <FaCalendarDay className={styles.icon} />
          <p>Today</p>
        </div>
        <div
          onClick={() => setTabs(2)}
          className={`${styles.tab} ${tabs === 2 ? styles.active : ""}`}
        >
          <FaCalendarAlt className={styles.icon} />
          <p>Tomorrow</p>
        </div>
        <div
          onClick={() => setTabs(3)}
          className={`${styles.tab} ${tabs === 3 ? styles.active : ""}`}
        >
          <FaCalendarCheck className={styles.icon} />
          <p>Completed Todos</p>
        </div>
        <div
          onClick={() => setTabs(4)}
          className={`${styles.tab} ${tabs === 4 ? styles.active : ""}`}
        >
          <FaPersonBooth className={styles.icon} />
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
