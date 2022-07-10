import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";
import Spinner from "../comps/Spinner";
import Popup from "../comps/Popup";
import { register, reset } from "../store/auth";
import Loader from "../comps/Loader";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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

  const { name, email, password, confirmPassword } = formData;

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
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "error",
        message: "Successfully registered",
      }));
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password === "" || email === "" || name === "") {
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "error",
        message: "Fill in the necessary fields!",
      }));
    } else if (password !== confirmPassword) {
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "error",
        message: "Password mismatch!",
      }));
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="container">
      <Popup
        open={popupDetails.open}
        severity={popupDetails.severity}
        message={popupDetails.message}
        closePopup={closePopup}
      />
      <section className="heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your Password"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirm"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={onChange}
              required
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

export default Register;
