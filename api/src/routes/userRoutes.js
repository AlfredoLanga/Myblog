import userController from '../controllers/userController.js';
import {auth} from '../middlewares/authentication.js'
import express from 'express';

const router = express.Router();

router.post('/create', userController.store);
router.get('/index',auth, userController.index);
router.get('/user?:id',auth, userController.show);
router.post('/update?:id', userController.update);
router.delete('/user?:id',userController.delete);
router.post('/login',userController.login);
router.get('/logout',userController.signout);


export default router;
