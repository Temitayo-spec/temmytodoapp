import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth";
import styles from "../styles/header.module.css";

const Header = () => {
  const { pathname } = useRouter();
  const dispatch = useDispatch()
  return (
    <div className={styles.header}>
      <div className={styles.inner}>
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
