import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../store/auth";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useRouter } from "next/router";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const router = useRouter
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    router.pathname = "/";
  };
  return (
    <div className="wrapper">
      <header className="header">
        <div className="logo">
          <Link href="/">
            <h1>Goal<span>Setter</span></h1>
          </Link>
        </div>

        <ul>
          {user ? (
            <li>
              <button type="button" className="logout_btn" onClick={onLogout}>
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link href="/login">
                  <a>
                    <FaSignInAlt />
                    <span>Login</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <a>
                    <FaUser />
                    <span>Register</span>
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Header;
