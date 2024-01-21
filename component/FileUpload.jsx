import React, { useState } from "react";
import Uploading from "./Uploading";

const FileUpload = ({ username, status, setStatus }) => {
  const [upload, setUpload] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    setUpload(true);
    if (!file || !username) {
      alert("Please select a file and enter text data");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("username", username); // Change 'textData' to 'username'

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER}upload`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("File and username uploaded successfully");
        setUpload(false);
        setStatus(!status);
      } else {
        console.error("Failed to upload file and username");
        setUpload(false);
      }
    } catch (error) {
      setUpload(false);
      console.error("Error during file and username upload:", error);
    }
  };

  return (
    <div>
      {upload && <Uploading />}
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
