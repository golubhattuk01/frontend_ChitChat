import React from "react";
import "../styles/postbox.css";
const PostBox = ({ element }) => {
  return (
    <div className="outer">
      <div className="info">
        <div className="userid">
          <img src={element.userId.avatar} alt="Admin" className="infoPic" />
          <p className="username">{element.userId.username}</p>
        </div>
        <div className="heading">
          <h3>{element.postText}</h3>
        </div>
      </div>

      <div className="post_item">
        <img src={`${element.image}`} alt="POST_IMG" className="post_img" />
      </div>
    </div>
  );
};

export default PostBox;
