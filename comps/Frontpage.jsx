import styles from "../styles/frontpage.module.css";
import Link from "next/link";

const Frontpage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h1>
          Todo <span>App</span>
        </h1>
        <p>
          An easy todo app that you can use to manage your tasks.
          <br />
          <br />
          <Link href="/todo">
            <a>
              <button>Start</button>
            </a>
          </Link>
        </p>
        <p>You can login to see the todo app in action.</p>

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
