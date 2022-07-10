import styles from "../styles/loader.module.css";

const Loader = ({ ml }) => {
  return (
    <div
      style={{
        marginLeft: `${ml}px`,
      }}
      className={styles.wrapper}
    >
      <div className={styles.inner}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
};

export default Loader;
