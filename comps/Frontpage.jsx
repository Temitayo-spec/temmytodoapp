import styles from "../styles/frontpage.module.css";
import Link from "next/link";

const Frontpage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h1>
          Goal <span>Setter</span>
        </h1>
        <p>
          This is a simple app to help you set goals and track your progress.
        </p>
        <p>You can login or register to get started.</p>

        <div className={styles.button_ctn}>
          <Link href="/login">
            <button className={styles.button}>Login</button>
          </Link>
          <Link href="/register">
            <button className={styles.button}>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
