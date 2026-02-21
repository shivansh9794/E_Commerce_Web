import express from 'express'
import { addUser, checkProtection, deleteUser, getAdmin, getAllUsers, getData, login } from '../controller/userController.js';
import protect from '../middlewares/authMiddleWare.js';
const router = express.Router();

router.post('/addUser', addUser);
router.get('/getAllUsers',protect, getAllUsers);
router.delete('/deleteUser',protect, deleteUser);
router.get('/getAdmin', getAdmin);
router.get('/getData', getData);
router.post('/login', login);
// checking for auth
router.get('/checkProtection',protect,checkProtection);

export default router;