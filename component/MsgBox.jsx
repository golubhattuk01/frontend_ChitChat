// MsgBox.js
import { IoSend } from "react-icons/io5";
import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { MyContext } from "../src/App";
import MsgLoad from "./MsgLoad";
import { Link } from "react-router-dom";
import "../styles/msg.css";

const MsgBox = () => {
  const buttonRef = useRef(null);
  const [isLogin] = useContext(MyContext);
  const msgInputRef = useRef(null);
  const [msgStatus, setMsgStatus] = useState(true);
  const msgContainerRef = useRef(null);

  const handleSend = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER}send`, {
        userId: isLogin.obj.username,
        msgItem: msgInputRef.current.value,
      });

      if (response.data.userId === isLogin.obj._id) {
        setMsgStatus(!msgStatus);
        console.log("msg send");
        msgInputRef.current.value = "";
      } else {
        console.log("Response is: msg not sent");
      }
    } catch (error) {
      console.error("Error during sending msg:", error);
    }
  };
  document.querySelector(".autoReload");

  useEffect(() => {
    const intervalId = setInterval(() => {
      buttonRef.current.click();
    }, 5000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="user-profile-container">
      {!isLogin.bool ? (
        <center>
          <h1>LOG IN PLEASE</h1>

          <a href="/login">
            <button>Login</button>
          </a>
        </center>
      ) : (
        <>
          <MsgLoad msgStatus={msgStatus} msgContainerRef={msgContainerRef} />
          <div className="sendMsg">
            <button
              hidden
              className="autoReload"
              ref={buttonRef}
              onClick={() => setMsgStatus(!msgStatus)}
            >
              Refresh
            </button>
            <input
              type="text"
              placeholder="Enter your text here"
              className="msgInput"
              ref={msgInputRef}
            />
            <button className="btn btn-info btn" onClick={handleSend}>
              <IoSend />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MsgBox;
