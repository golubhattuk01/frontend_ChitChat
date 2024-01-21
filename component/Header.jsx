import { Link } from "react-router-dom";
import "../styles/header.css";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "../src/App";
const Header = () => {
  const [isLogin, setIsLogin] = useContext(MyContext);
  return (
    <div className="headerCls">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <Link to="/profile">
          {" "}
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <FaRegUserCircle />
            </button>
          </li>
        </Link>
        <Link to="/inbox">
          {" "}
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              <FaRocketchat />
            </button>
          </li>
        </Link>
        <Link to="/developer">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Contact
            </button>
          </li>
        </Link>
      </ul>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <Link to="/login">
          {" "}
          <li className="nav-item" role="presentation">
            <button
              onClick={() => setIsLogin(false)}
              className="nav-link"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Login
            </button>
          </li>
        </Link>
        <Link to="/">
          {" "}
          <li className="nav-item" role="presentation">
            <button
              onClick={() => setIsLogin(false)}
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Sign Up
            </button>
          </li>
        </Link>
        <Link to="/logout">
          {" "}
          <li className="nav-item" role="presentation">
            <button
              onClick={() => setIsLogin(false)}
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Log Out
            </button>
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default Header;
