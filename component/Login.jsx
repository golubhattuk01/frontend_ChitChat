import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import "../styles/signup.css";
import { Link, json, redirect, useNavigate } from "react-router-dom";
import { MyContext } from "../src/App";

const Login = () => {
  const [isLogin, setIsLogin] = useContext(MyContext);
  const [error, setError] = useState(false);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER}login`, {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });

      if (response.data.username === usernameRef.current.value) {
        console.log("Response is:", response.data);
        setIsLogin({
          bool: true,
          obj: response.data,
        });
        history("/profile");
      } else {
        console.log("Response is:", response.data);
        setError(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
      console.log("Error response:", error.response);
      // Handle the error or set an error state here
    }
  };

  return (
    <div className="container bg-dark bg-gradient">
      <form onSubmit={handleLogin} className="content">
        <p style={{ color: "red" }} className="header">
          Log in to see more
        </p>
        <br />
        <input
          type="text"
          placeholder="Username"
          className="detail"
          name="username"
          ref={usernameRef}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="detail"
          name="password"
          ref={passwordRef}
        />
        <br />
        <h4 style={{ color: "red" }}>Forgot your password?</h4>
        <button type="submit" className="btn int">
          Log In
        </button>
        <br />
        <br />
        <br />
        {error && (
          <h5 style={{ color: "green" }}>
            PLEASE ENTER THE CORRECT USERNAME AND PASSWORD
          </h5>
        )}
      </form>
    </div>
  );
};

export default Login;
