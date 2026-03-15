import express from 'express';
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/dbConfig.js';
import cookieParser from "cookie-parser";
import cors from 'cors'

dotenv.config();
const app=express();
app.use(express.json());
app.use(cookieParser());
// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

connectDB();

app.get("/",(req,res)=>{
    res.send("Backend is Live 🔥");
})

app.use("/api/user",userRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is live on http://localhost:${process.env.PORT}`)
})
