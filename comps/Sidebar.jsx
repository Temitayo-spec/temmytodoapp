import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaCalendarDay,
  FaPersonBooth,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openSidebar, setOpenSidebar } from "../store/modal";
import styles from "../styles/sidebar.module.css";

const Sidebar = ({ setTabs, tabs }) => {
  const open = useSelector(openSidebar);
  const dispatch = useDispatch();
  return (
    <div className={`${styles.wrapper} ${open ? styles.open : ""}`}>
      <div className={styles.tabs}>
        <div
          onClick={() => {
            setTabs(1);
            dispatch(setOpenSidebar())
          }}
          className={`${styles.tab} ${tabs === 1 ? styles.active : ""}`}
        >
          <FaCalendarDay className={styles.icon} />
          <p>Today</p>
        </div>
        <div
          onClick={() => {
            setTabs(2);
            dispatch(setOpenSidebar());
          }}
          className={`${styles.tab} ${tabs === 2 ? styles.active : ""}`}
        >
          <FaCalendarAlt className={styles.icon} />
          <p>Tomorrow</p>
        </div>
        <div
          onClick={() => {
            setTabs(3);
            dispatch(setOpenSidebar());
          }}
          className={`${styles.tab} ${tabs === 3 ? styles.active : ""}`}
        >
          <FaCalendarCheck className={styles.icon} />
          <p>Completed Todos</p>
        </div>
        <div
          onClick={() => {
            setTabs(4);
            dispatch(setOpenSidebar());
          }}
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
