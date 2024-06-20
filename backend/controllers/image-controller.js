import File from "../model/file.js"

export const uploadController = async (req, res) => {
    // creating a file object
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname,
    }
    try {
        const file = await File.create(fileObj);
        return res.status(200).json({ path: `http://localhost:8000/file/${file._id}` });

    } catch (err) {
        console.log("creating object err: ", err);
    }
    // res.send("File uploaded!");
};

export const getFile = async (req, res) => {
    console.log(req.params);
    try {
        const file = await File.findById(req.params.fileId);
        if (file) file.downloadCount++;
        file.save();
        res.download(file.path, file.name)
    } catch (err) {
        console.log("Errro getting file: ", err);
    }
    // res.send("File uploaded!");
};
