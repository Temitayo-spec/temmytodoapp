import styles from "../styles/header.module.css";
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h1>Todo List App</h1>
      </div>
    </div>
  );
};

export default Header;
