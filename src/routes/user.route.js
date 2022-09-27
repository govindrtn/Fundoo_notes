import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new user
router.post('/register', newUserValidator,  userController.registerUser);

// route to login a user
router.post('/login', userController.userLogin);

export default router;




// "firstName":"sanjay",
//     "lastName": "rajput",
//     "email": "sanjayrajput@gmail.com",
//     "password": "qazplm12345@"