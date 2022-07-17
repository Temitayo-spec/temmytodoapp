import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth";
import { openSidebar, setOpenSidebar } from "../store/modal";
import styles from "../styles/header.module.css";

const Header = () => {
  const { pathname } = useRouter();
  const dispatch = useDispatch();
  const open = useSelector(openSidebar);
  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        {pathname === "/dashboard" ? (
          <div
            onClick={() => dispatch(setOpenSidebar())}
            className={`${styles.burger} ${open ? styles.active : ""}`}
          >
            <div className={styles.one} />
            <div className={styles.two} />
            <div className={styles.three} />
          </div>
        ) : null}
        <Link href="/">
          <h1>Todo List App</h1>
        </Link>

        <div className={styles.button_ctn}>
          {pathname === "/" ? (
            <>
              <Link href="/login">
                <button className={styles.button}>Login</button>
              </Link>
              <Link href="/register">
                <button className={styles.button}>Register</button>
              </Link>
            </>
          ) : pathname === "/login" ? (
            <Link href="/register">
              <button className={styles.button}>Register</button>
            </Link>
          ) : pathname === "/register" ? (
            <Link href="/login">
              <button className={styles.button}>Login</button>
            </Link>
          ) : (
            <Link href="/login">
              <button
                onClick={() => dispatch(logout())}
                className={styles.button}
              >
                Logout
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
