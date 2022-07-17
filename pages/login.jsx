import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../comps/Header";
import Loader from "../comps/Loader";
import Popup from "../comps/Popup";
import Spinner from "../comps/Spinner";
import { login, reset } from "../store/auth";
import styles from "../styles/login.module.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [popupDetails, setPopupDetails] = useState({
    open: false,
    severity: "",
    message: "",
  });

  const closePopup = () => {
    setPopupDetails((prevState) => ({
      ...prevState,
      open: false,
    }));
  };
  const router = useRouter();

  const dispatch = useDispatch();

  const isError = useSelector((state) => state.auth.isError);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isSuccess = useSelector((state) => state.auth.isSuccess);
  const message = useSelector((state) => state.auth.message);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (isError) {
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "error",
        message: "Network Error",
      }));
      dispatch(reset());
    }

    if (user.message === "User does not exist") {
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "error",
        message: "User does not exist",
      }));
      user = {};
      dispatch(reset());
    }

    if (isSuccess && user?.success === true) {
      router.push("/dashboard");
      dispatch(reset());
    }
  }, [user, isError, isLoading, isSuccess, message, dispatch]);

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password === "" || email === "") {
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "error",
        message: "Fill in the necessary fields!",
      }));
      dispatch(reset())
    } else {
      const loginData = {
        email,
        password,
      };
      dispatch(login(loginData));
    }
  };

  // if (isLoading) {
  //   return <Spinner />;
  // }
  return (
    <div className={styles.wrapper}>
      <Popup {...popupDetails} closePopup={closePopup} />
      <Header />
      <div className={styles.inner}>
        <h1>Login to start your own todo list!</h1>

        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.form_input_ctn}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className={styles.form_input_ctn}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className={styles.form_input_ctn}>
            <button className={styles.submit} type="submit">
              Login <span>{isLoading ? <Loader ml={10} /> : null}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
