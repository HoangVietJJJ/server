import express from 'express'
require('dotenv').config()
import cors from 'cors'
import initRoutes from './src/routes'
import connectDB from './src/config/connectDB'

const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"]
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

initRoutes(app)
connectDB()

app.use('/', (req, res) => { res.send('server online') })
const port = process.env.PORT || 8888
const listener = app.listen(port, () => {
    console.log(`Server is running on port ${listener.address().port}`);
})