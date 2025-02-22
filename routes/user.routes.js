import {Router} from 'express';
import * as userController from '../controllers/user.controller.js';
import {body } from 'express-validator';

const router = Router();
console.log("Routes loaded");


router.post('/register',
    body('email').isEmail().withMessage('Email must be a valid email address'),
    body('password').isLength({min: 8}).withMessage('Password must be at leat 8 character long'),
userController.createUserController);

export default router;

