import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const dbConnect = async () => {
    const MONGO_URL = process.env.MONGO_URL;
    try {
        await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
        console.log("Connected to db");
    } catch (err) {
        console.log("An error occured connecting to db", err);
    }
}

export default dbConnect


