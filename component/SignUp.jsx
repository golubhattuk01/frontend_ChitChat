import React, { useState } from "react";
import "../styles/signup.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [x, setx] = useState(false); // for accont created successfully
  const history = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    phone: "",
    email: "",
    jobProfile: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER}register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Registration successful");
        setx(true);
        history("/login");
        // You can redirect the user or perform other actions after successful registration
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="container bg-dark bg-gradient">
      <form onSubmit={handleSubmit} className="content">
        <p style={{ color: "red" }} className="header">
          Sign Up
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="detail"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Username"
          className="detail"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="detail"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <input
          type="tel"
          placeholder="Phone Number"
          className="detail"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          className="detail"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Job Role"
          className="detail"
          name="jobProfile"
          value={formData.jobProfile}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Address"
          className="detail"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <br />
        <button type="submit" className="btn int">
          Sign Up
        </button>
        <br />
        {x && <h3>ACCOUNT CREATED SUCCESSFULLY</h3>}
        <footer>
          <hr />
        </footer>
      </form>
    </div>
  );
};

export default SignUp;
