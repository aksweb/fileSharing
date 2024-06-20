import express from "express"
import { uploadController, getFile } from "../controllers/image-controller.js"
import upload from "../utils/upload.js";

const router = express.Router();

router.post('/upload', upload.single('file'), uploadController,)
router.get('/file/:fileId', getFile)
export default router;  