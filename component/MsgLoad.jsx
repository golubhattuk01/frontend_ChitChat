// MsgLoad.js
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MyContext } from "../src/App";
import SingleMsg from "./SingleMsg";
import "../styles/msg.css";

const MsgLoad = ({ msgStatus, msgContainerRef }) => {
  const [msgList, setMsgList] = useState([]);
  const [isLogin] = useContext(MyContext);

  useEffect(() => {
    const fetchMyUser = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER}msgFatch`
        );

        if (response && response.status === 200) {
          setMsgList(response.data);
        } else {
          console.log("FAILED TO FETCH MSG");
        }
      } catch (error) {
        console.error("Error during MSG data fetch:", error);
      }
    };

    if (isLogin.bool) {
      fetchMyUser();
    }
  }, [msgStatus]);

  const msgArray = Object.values(msgList);

  if (!msgArray || msgArray.length === 0) {
    return <h1>No Post Available</h1>;
  }

  return (
    <div className="msgShow" ref={msgContainerRef}>
      {msgArray.map((item) => (
        <SingleMsg element={item} curr={isLogin.obj} key={item._id} />
      ))}
    </div>
  );
};

export default MsgLoad;
