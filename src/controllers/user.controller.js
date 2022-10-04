import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';


// contriller for register new user
export const registerUser = async (req, res, next) => {
  try {
    const data = await UserService.registerUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User registation done.... successfully '
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};

// contriller for login new user
 export const userLogin = async (req, res, next) => {
  // console.log("body ---------------------------------> ",req.body)
  try {
    const data = await UserService.userLogin(req.body);
    console.log("userLogin data  ---------------------------------> ",data)

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'User login.... successfully...'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};

// contriller for forget password 
export const forgetPassword = async (req, res, next) => {
  // console.log("body ---------------------------------> ",req.body)
  try {
    const data = await UserService.forgetPassword(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      message: 'forget password token sent.... successfully...'
    });
  } catch (error) {
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      message: `${error}`
    });
  }
};


// contriller for reset password 
export const resetPassword = async (req, res, next) => {
  // console.log("body ---------------------------------> ",req.body)
  try {
    const data = await UserService.resetPassword(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      message: 'Password Reset successfully...'
    });
  } catch (error) {
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      message: `${error}`
    });
  }
};
