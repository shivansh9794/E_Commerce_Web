import express from 'express'
import { addUser, deleteUser, getAdmin, getAllUsers, getData, login } from '../controller/userController.js';
const router = express.Router();

router.post('/addUser', addUser);
router.get('/getAllUsers', getAllUsers);
router.delete('/deleteUser', deleteUser);
router.get('/getAdmin', getAdmin);
router.get('/getData', getData);
router.get('/login', login);

export default router;