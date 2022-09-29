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


export const forgetPasword = async (req, res, next) => {
  try {
    const data = await UserService.forgetPasword(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: ' forget pasword link send successfully...'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};



