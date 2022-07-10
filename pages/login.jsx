import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../comps/Spinner";
import Popup from "../comps/Popup";
import { FaSignInAlt } from "react-icons/fa";

import { login, reset } from "../store/auth";
import Loader from "../comps/Loader";
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
    }

    if (isSuccess || user) {
      window.location.pathname = "/dashboard";
    }

    dispatch(reset());
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
    } else {
      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="container">
      <Popup
        open={popupDetails.open}
        message={popupDetails.message}
        severity={popupDetails.severity}
        closePopup={closePopup}
      />
      <section className="heading">
        <h1>
          <FaSignInAlt />
          Login
        </h1>
        <p>Login and start setting goals!</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your Password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit <span>{isLoading ? <Loader ml={10} /> : null}</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
