import { useRef, useEffect, useState } from "react";
import "./App.css";
import uploadFile from "./services/api";
function App() {
  const [file, setFile] = useState(0);
  const [link, setLink] = useState("");
  console.log(file);
  const fileInputRef = useRef();
  const onUploadClick = () => {
    fileInputRef.current.click();
  };
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        console.log("name: ", file.name);

        data.append("name", file.name);
        data.append("file", file);
        const res = await uploadFile(data);
        setLink(res.path);
        console.log(res);
      }
    };
    getImage();
  }, [file]);
  return (
    <>
      <h1>RGIPT's File sharing app</h1>
      <p>Upload and share the link with your mates</p>
      <button onClick={() => onUploadClick()}>Upload</button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => setFile(e.target.files[0])}
        style={{ display: "none" }}
      />
      <a href={link}>{link}</a>
      {/* {if(res)<a>{res}</a>} */}
    </>
  );
}

export default App;
