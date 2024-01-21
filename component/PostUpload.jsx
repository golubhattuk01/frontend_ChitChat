import React, { useState } from "react";
import "../styles/uploadPost.css";
import Uploading from "./Uploading";
const PostUpload = ({ username, status, setStatus }) => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState(null);
  const [upload, setUpload] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleUpload = async () => {
    setUpload(true);
    if (!file || !text) {
      alert("Please select a file and enter text data");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("username", username);
    formData.append("text", text); // Change 'textData' to 'username'

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER}post`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("File and text uploaded successfully");
        setUpload(false);
      } else {
        console.error("Failed to upload file and post");
        setUpload(false);
      }
    } catch (error) {
      setUpload(false);
      setStatus(!status);
      console.error("Error during file and text upload:", error);
    }
  };

  return (
    <div className="post-box">
      {upload && <Uploading />}
      <input
        type="text"
        placeholder="Type your text..."
        onChange={handleTextChange}
      />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default PostUpload;
