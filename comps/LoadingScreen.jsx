import React from "react";
import styles from "../styles/loadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.balls}>
        <div className={`${styles.ball} ${styles.one}`}></div>
        <div className={`${styles.ball} ${styles.two}`}></div>
        <div className={`${styles.ball} ${styles.three}`}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
