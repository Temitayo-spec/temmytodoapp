import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Completed from "../comps/Completed";
import DeleteModal from "../comps/DeleteModal";
import Header from "../comps/Header";
import NextDay from "../comps/NextDay";
import Overview from "../comps/Overview";
import Popup from "../comps/Popup";
import Profile from "../comps/Profile";
import Sidebar from "../comps/Sidebar";
import Spinner from "../comps/Spinner";
import Today from "../comps/Today";
import TodosModal from "../comps/TodosModal";
import UpdateTaskModal from "../comps/UpdateTaskModal";
import { getUser } from "../store/auth";
import { getTodos, reset } from "../store/todos";
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
  const allTodos = useSelector((state) => state.todo.todos);
  const succeed = useSelector((state) => state.todo.isSuccess);

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
    if (isError && tabs !== 4) {
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "error",
        message: "Network Error",
      }));
    }
    if (isSuccess && tabs !== 4) {
      setPopupDetails((prevState) => ({
        ...prevState,
        open: true,
        severity: "success",
        message: userDetails?.message || "User Details Fetched",
      }));
    }

    if (!user) {
      router.push("/login");
    }

    dispatch(getUser());
  }, [dispatch, isError, isSuccess, user, router]);

  useEffect(() => {
    if (userDetails) {
      dispatch(getTodos());
    }
  }, [dispatch, userDetails]);

  if (isLoading && tabs !== 4) {
    return <Spinner />;
  }

  return (
    <div className={styles.wrapper}>
      <Popup {...popupDetails} closePopup={closePopup} />
      <TodosModal />
      <DeleteModal />
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
          <div className={styles.main_content}>
            {tabs === 0 && <Overview allTodos={allTodos} />}
            {tabs === 1 && <Today allTodos={allTodos} />}
            {tabs === 2 && <NextDay allTodos={allTodos} />}
            {tabs === 3 && <Completed allTodos={allTodos} />}
            {tabs === 4 && <Profile />}
          </div>
        </section>
      </main>
    </div>
  );
};

export default dashboard;
