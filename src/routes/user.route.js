import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { resetAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new user
router.post('/register', newUserValidator,  userController.registerUser);

// route to login a user
router.post('/login', userController.userLogin);

// route to forget password
router.post('/forget', userController.forgetPassword);

// route to reset password
router.post('/reset',resetAuth, userController.resetPassword);

export default router;




// "firstName":"sanjay",
//     "lastName": "rajput",
//     "email": "sanjayrajput@gmail.com",
//     "password": "qazplm12345@"