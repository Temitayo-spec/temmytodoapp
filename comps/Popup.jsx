import React from "react";
import { useState } from "react";
import styles from "../styles/popup.module.css";

const Popup = ({ severity, open, message, closePopup }) => {

  open &&
    setTimeout(() => {
      closePopup();
    }, 5000);

  return (
    <>
      {open ? (
        <div
          className={styles.wrapper}
        >
          <div
            className={`${styles.inner} ${
              severity === "error" ? styles.error : ""
            }`}
          >
            <div className={styles.message}>
              <h3>{message}</h3>
            </div>

            <img
              style={{
                marginLeft: "20px",
                cursor: "pointer",
              }}
              onClick={() => closePopup()}
              src="/svg/ic-cancel.svg"
              alt=""
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Popup;
