import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "../styles/profile.css";
import { MyContext } from "../src/App";
import FileUpload from "./FileUpload";
import PostLoad from "./PostLoad";
import PostUpload from "./PostUpload";
import FeedLoad from "./FeedLoad";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [refresh, setRefresh] = useState(false);
  const [status, setStatus] = useState(true);
  const [isLogin, setIsLogin] = useContext(MyContext);
  const [feed, setFeed] = useState(false);
  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    const fetchMyUser = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER}myuser`,
          {
            username: isLogin.obj.username,
          }
        );

        if (response.data.username === isLogin.obj.username) {
          setMyUser(response.data);
        } else {
          console.log("Response is:", response.data);
        }
      } catch (error) {
        console.error("Error during user data fetch:", error);
      }
    };

    if (isLogin.bool) {
      fetchMyUser();
    }
  }, [status]);

  return (
    <div className="profileDiv">
      <div className="user-profile-container">
        {!isLogin.bool ? (
          <center>
            <h1>LOG IN PLEASE</h1>

            <a href="/login">
              <button>Login</button>
            </a>
          </center>
        ) : myUser ? (
          <div className="user-profile-container bg-dark bg-gradient">
            <button onClick={() => setStatus(!status)}>Refresh</button>
            <div className="user-profile bg-dark ">
              <img
                src={myUser.avatar}
                alt="Profile Pic"
                className="profile-pic"
              />
              <FileUpload
                status={status}
                setStatus={setStatus}
                username={myUser.username}
              />
              <h3 style={{ color: "green" }} className="btn-outline-primary">
                {myUser.fullName}
              </h3>
              <div className="profile-info">
                <p>
                  <strong>Username:</strong> {myUser.username}
                </p>
                <p>
                  <strong>Email:</strong> {myUser.email}
                </p>
                <p>
                  <strong>Job Profile:</strong> {myUser.jobProfile}
                </p>
                <p>
                  <strong>Phone:</strong> {myUser.phone}
                </p>
                <p>
                  <strong>Address:</strong> {myUser.address}
                </p>
                <p>
                  <strong>Joined at :</strong> {myUser.createdAt}
                </p>

                <button onClick={() => setIsLogin(false)}>Log Out</button>
              </div>
              {!feed && (
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setFeed(!feed)}
                >
                  Your Posts
                </button>
              )}
              {feed && (
                <button
                  className="btn btn-outline-success"
                  onClick={() => setFeed(!feed)}
                >
                  Feed
                </button>
              )}
            </div>

            <div className="add-post">
              <h3 style={{ color: "red" }}>Create a Post</h3>
              <PostUpload
                username={myUser.username}
                status={status}
                setStatus={setStatus}
              />
            </div>

            {feed ? (
              myUser.postList && (
                <PostLoad
                  Posts={myUser.postList}
                  user={myUser}
                  status={status}
                  setStatus={setStatus}
                />
              )
            ) : (
              <FeedLoad />
            )}
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
