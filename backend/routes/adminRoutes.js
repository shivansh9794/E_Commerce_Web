import express from 'express'
import { userGrowth15days } from '../controller/adminController.js';

const router = express.Router();

router.get("/user-growth-15days", userGrowth15days);

export default router;