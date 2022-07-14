import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Completed from "../comps/Completed";
import Header from "../comps/Header";
import NextDay from "../comps/NextDay";
import Overview from "../comps/Overview";
import Popup from "../comps/Popup";
import Profile from "../comps/profile";
import Sidebar from "../comps/Sidebar";
import Spinner from "../comps/Spinner";
import Today from "../comps/Today";
import UpdateTaskModal from "../comps/UpdateTaskModal";
import { getUser, reset } from "../store/auth";
import { getTodos } from "../store/todos";
import styles from "../styles/dashboard.module.css";

const dashboard = () => {
  const [tabs, setTabs] = useState(0);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isError = useSelector((state) => state.auth.isError);
  const isSuccess = useSelector((state) => state.auth.isSuccess);
  const message = useSelector((state) => state.auth.message);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const router = useRouter();
  const todos = useSelector((state) => state.todo.todos);

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
    dispatch(getUser());
    dispatch(getTodos());
    if (isError) {
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "error",
        message: "Network Error",
      }));
    }
    if (isSuccess) {
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "success",
        message: userDetails?.message || "User Details Fetched",
      }));
      console.log(userDetails);
    }

    if (!user) {
      router.push("/login");
    }
  }, [dispatch, isError, isSuccess, user, router]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.wrapper}>
      <Popup {...popupDetails} closePopup={closePopup} />
      <UpdateTaskModal />
      <Header />
      <main className={styles.main}>
        <Sidebar setTabs={setTabs} tabs={tabs} />
        <section className={styles.content}>
          {tabs === 4 ? (
            ""
          ) : (
            <header className={styles.header}>
              <div className={styles.info}>
                <h1>Welcome {userDetails && userDetails?.data?.name}</h1>
                <p>Todo dashboard</p>
              </div>

              <div className={styles.profile}>
                <img
                  src={
                    userDetails &&
                    `
              data:image/jpeg;base64,${userDetails?.data?.image}
              `
                  }
                  alt="profile"
                />
              </div>
            </header>
          )}
          {tabs === 0 && <Overview todos={todos} />}
          {tabs === 1 && <Today todos={todos} />}
          {tabs === 2 && <NextDay todos={todos} />}
          {tabs === 3 && <Completed todos={todos} />}
          {tabs === 4 && <Profile />}
        </section>
      </main>
    </div>
  );
};

export default dashboard;
