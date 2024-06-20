import express from 'express'
import dbConnect from './database/db.js'
import router from './routes/routes.js'
import cors from 'cors'

const app = express()
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(cors());
dbConnect();

const PORT = 8000 || process.env.PORT;

app.use('/', router)

app.get('/', (req, res) => {
    return res.send("Hi welcome to base");
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})