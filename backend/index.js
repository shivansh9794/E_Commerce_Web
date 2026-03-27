import express from 'express';
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/dbConfig.js';
import cookieParser from "cookie-parser";
import cors from 'cors'
import adminRoutes from './routes/adminRoutes.js'

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
// app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
  })
);

connectDB();

app.get("/", (req, res) => {
  res.send("Backend is Live 🔥");
})

app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is live on http://localhost:${process.env.PORT}`)
})
