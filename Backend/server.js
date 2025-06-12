const express = require("express")

const mongoose = require("mongoose")

const PORT = 5000

const Router = require("./Routes/userRoutes")

const cors = require("cors")


mongoose.connect("mongodb+srv://udawat:1234@udawat.1cdje.mongodb.net/Turf-Booking-System");

const app = express()

app.use(
  cors({
    origin: "http://localhost:5173", // ✅ your frontend origin
    credentials: true, // ✅ allow cookies/auth headers
  })
);

app.use(express.json())

app.use(express.urlencoded())

app.use("/user",Router)

app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT} Port`)
})