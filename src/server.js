import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import productRouter from './routers/product.js'
import fileRouter from './routers/image.js'
import mongoose from 'mongoose'

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const app = express()
// Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Static file
app.use(express.static("src/public"))

// Router
app.use('/api', productRouter)
app.use('/upload', fileRouter)
// Connet mongo
// 1.Cai dat mongoose
// 2.Connet mongoose
// 3.Tao model
// 4.Query mongoose
mongoose.connect("mongodb://127.0.0.1:27017/we17317")
.then(() => console.log("Connect to db sucessfully"))


app.get('/', (req, res) => {
    const html = fs.readFileSync(path.join(__dirname, "view/home.html"), "utf-8")
    res.send(html)
    res.end()
})


app.listen(8000, () => {
    console.log("Server running on port 8000");
}) 