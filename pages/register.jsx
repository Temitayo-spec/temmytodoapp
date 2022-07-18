import { useEffect, useState } from "react";
import Header from "../comps/Header";
import ProfilePicture from "../comps/ProfilePicture";
import RegisterForm from "../comps/RegisterForm";
import styles from "../styles/register.module.css";
import Popup from "../comps/Popup";
import { useDispatch, useSelector } from "react-redux";
import { resetUser, selectImageSrc, setNewUser, signup } from "../store/auth";
import { useRouter } from "next/router";
import Spinner from "../comps/Spinner"

const register = () => {
  const image = useSelector(selectImageSrc);
  const [page, setPage] = useState(1);
  const newUser = useSelector((state) => state.auth.newUser);
  const dispatch = useDispatch();

  const isError = useSelector((state) => state.auth.isError);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isSuccess = useSelector((state) => state.auth.isSuccess);
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();

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
      router.push("/dashboard");
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "success",
        message: "Successfully registered",
      }));
    }

    dispatch(resetUser());
  }, [user, isError, isSuccess, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      newUser?.password === "" ||
      newUser?.email === "" ||
      newUser?.name === ""
    ) {
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "error",
        message: "Fill in the necessary fields!",
      }));
    } else {
      const formData = new FormData();
      formData.append("name", newUser?.name);
      formData.append("email", newUser?.email);
      formData.append("password", newUser?.password);
      formData.append("image", image);
      dispatch(signup(formData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className={styles.wrapper}>
      <Popup
        open={popupDetails.open}
        severity={popupDetails.severity}
        message={popupDetails.message}
        closePopup={closePopup}
      />
      <Header />
      <div className={styles.inner}>
        <h1>Register to start your own todo list!</h1>

        <form onSubmit={onSubmit} className={styles.form}>
          {page === 1 && <RegisterForm setPage={setPage} />}
          {page === 2 && (
            <ProfilePicture setPage={setPage} isLoading={isLoading} />
          )}
        </form>
      </div>
    </div>
  );
};

export default register;
