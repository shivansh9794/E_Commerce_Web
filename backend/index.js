import express from 'express';
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/dbConfig.js';
import cookieParser from "cookie-parser";

dotenv.config();
const app=express();
app.use(express.json());
app.use(cookieParser());

connectDB();

app.get("/",(req,res)=>{
    res.send("Backend is Live 🔥");
})

app.use("/api/user",userRoutes);



app.listen(process.env.PORT,()=>{
    console.log(`Server is live on http://localhost:${process.env.PORT}`)
})