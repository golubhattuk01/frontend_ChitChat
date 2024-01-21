import "../styles/developer.css";
import { FaUserGraduate } from "react-icons/fa6";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Developer = () => {
  return (
    <div className="card">
      {/* <img src="/" alt="John" style={{ width: "100%" }} />
       */}
      <center>
        <FaUserGraduate />
      </center>
      <h1>Gaurav Bhatt</h1>
      <center>9105210359</center>
      <p>Galgotias University</p>
      <div style={{ margin: "24px 0" }}>
        <Link to="https://www.linkedin.com/in/golubhattuk01/">
          <FaLinkedin />
          LinkedIn
        </Link>
        <br />

        <Link to="https://github.com/golubhattuk01">
          <i className="fa fa-twitter"></i>
          <FaSquareGithub />
          GitHub
        </Link>
        <br />

        <Link to="https://www.facebook.com/golubhattuk01/">
          <FaFacebook />
          Facebook
          <i className="fa fa-facebook"></i>
        </Link>
      </div>
    </div>
  );
};

export default Developer;
