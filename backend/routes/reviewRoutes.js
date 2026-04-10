import express from 'express'
import { addReview } from '../controller/reviewController.js';
import protect from '../middlewares/authMiddleWare.js';

const Router = express.Router();

Router.post("/addReview/:productId", protect, addReview);

export default Router;