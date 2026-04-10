import express from 'express'
import { addProduct } from '../controller/productController.js';
import protect from '../middlewares/authMiddleWare.js';

const Router = express.Router();

Router.post("/addProduct", protect, addProduct);

export default Router;
