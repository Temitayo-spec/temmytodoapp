import styles from "../styles/frontpage.module.css";
import Link from "next/link";
import Header from "./Header";

const Frontpage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.inner}>
        <div className={styles.lhs}>
          <h1>
            Todo List<span> App</span>
          </h1>
          <p>
            A simple todo list app that you can use to keep track of your tasks.
          </p>
          <Link href="/register">
            <button className={styles.button}>Get Started</button>
          </Link>
        </div>
        <div className={styles.rhs}>
          <img src="/svg/illustration-mockups.svg" alt="todo" />
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
