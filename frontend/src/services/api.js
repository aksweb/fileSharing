import axios from 'axios';
const API_URL = "https://filesharing-79vc.onrender.com";
const uploadFile = async (data) => {
    try {
        console.log("Form data: ", data);
        const res = await axios.post(`${API_URL}/upload`, data);
        return res.data;
    } catch (err) {
        console.log("Error uploading", err);
    }
}
export default uploadFile;