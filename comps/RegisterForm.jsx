import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setNewUser } from "../store/auth";
import styles from "../styles/registerForm.module.css";
import Popup from "./Popup";

const RegisterForm = ({ setPage }) => {
  const dispatch = useDispatch();
  const newUser = useSelector((state) => state.auth.newUser);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [popupDetails, setPopupDetails] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const closePopup = () => {
    setPopupDetails((prevState) => ({
      ...prevState,
      open: false,
    }));
  };

  const disabled = !newUser?.name || !newUser?.email || !newUser?.password;
  return (
    <div className={styles.wrapper}>
      <Popup {...popupDetails} closePopup={closePopup} />
      <div className={styles.form_input_ctn}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="name"
          id="username"
          placeholder="Username"
          value={newUser?.name}
          onChange={(e) =>
            dispatch(
              setNewUser({
                field: "name",
                value: e.target.value,
              })
            )
          }
        />
      </div>
      <div className={styles.form_input_ctn}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={newUser?.email}
          onChange={(e) =>
            dispatch(
              setNewUser({
                field: "email",
                value: e.target.value,
              })
            )
          }
        />
      </div>
      <div className={styles.form_input_ctn}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={newUser?.password}
          onChange={(e) =>
            dispatch(
              setNewUser({
                field: "password",
                value: e.target.value,
              })
            )
          }
        />
      </div>
      <div className={styles.form_input_ctn}>
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="password"
          placeholder="Confirm your Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button
        disabled={disabled}
        style={{
          background: disabled ? "#ccc" : "",
        }}
        onClick={() => {
          if (newUser?.password === confirmPassword) {
            setPage(2);
          } else {
            setPopupDetails((prevState) => ({
              ...prevState,
              open: true,
              severity: "error",
              message: "Password mismatch!",
            }));
          }
        }}
        type="button"
        className={styles.submit}
      >
        <span>Next</span>
      </button>
    </div>
  );
};

export default RegisterForm;
