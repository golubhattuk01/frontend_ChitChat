import FeedBox from "./FeedBox";
import "../styles/postbox.css";
import { useState, useEffect } from "react";
import axios from "axios";
const FeedLoad = () => {
  const [myPost, setMyPost] = useState(null);

  const fetchMyUser = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER}mypost`);
      if (response) {
        setMyPost(response.data);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    fetchMyUser();
  }, [myPost]);

  if (!myPost || myPost.length === 0) {
    return <h1>No Post Available</h1>;
  }

  return (
    <div className="post_card">
      {myPost.map((item) => (
        <FeedBox element={item} key={item._id} />
      ))}
    </div>
  );
};
export default FeedLoad;
