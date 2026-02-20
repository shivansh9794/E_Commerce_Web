import express from 'express';
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/dbConfig.js';

const app=express();
app.use(express.json());
dotenv.config();

connectDB();

app.get("/",(req,res)=>{
    res.send("Backend is Live 🔥");
})

app.use("/api/user",userRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`Server is live on http://localhost:${process.env.PORT}`)
})