const express = require("express")

const mongoose = require("mongoose")

const PORT = 4000

const Router = require("./Routes/userRoutes")

const cors = require("cors")


mongoose.connect("mongodb://localhost:27017/testdb");

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded())

app.use("/user",Router)

app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT} Port`)
})