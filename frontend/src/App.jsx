import { useRef, useEffect, useState } from "react";
import "./App.css";
import uploadFile from "./services/api";

function App() {
  const [file, setFile] = useState(null);
  const [link, setLink] = useState("");
  const [wait, setWait] = useState("");
  const [error, setError] = useState("");
  const fileInputRef = useRef();

  const onUploadClick = () => {
    fileInputRef.current.click();
    setWait("");
    setError("");
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        setWait("Uploading.. Please Wait, You get the link shortly.");
        try {
          const res = await uploadFile(data);
          setWait("");
          setLink(res.path);
        } catch (error) {
          setWait("");
          setError("Failed to upload the file.");
        }
      }
    };
    getImage();
  }, [file]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 20 * 1024 * 1024) {
      setFile(selectedFile);
    } else {
      setFile(null);
      setError("File size must be less than 20 MB.");
    }
  };

  return (
    <>
      <h1>RGIPT's File sharing app</h1>
      <p>Upload and share the link with your mates</p>
      <button onClick={onUploadClick}>Upload</button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {link && <a href={link}>{link}</a>}
      <p>{wait}</p>
      <p style={{ color: "red" }}>{error}</p>
    </>
  );
}

export default App;
