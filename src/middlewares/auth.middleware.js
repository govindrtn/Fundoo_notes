import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';



export const userAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');
    // console.log("before ---------", bearerToken);
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    // bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2NjM2NDYyMTJ9.d1vIiSo5JasGmVUe3YKjfGq2E7UgzqCUnYoFcXZx5cw;
    bearerToken = bearerToken.split(' ')[1];
    // console.log("after ---------", bearerToken);
    await jwt.verify(bearerToken, process.env.SECRET_KEY);
    next();
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};

export const resetAuth = async (req, res, next) => {
  try {
    let newBearerToken = req.header("Authorization")
    console.log("before ---------", newBearerToken);
    if (!newBearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required to reset password'
      }
      newBearerToken = newBearerToken.split(' ')[1];
      console.log("reset token -------->",newBearerToken );
    let userdatails = await jwt.verify(newBearerToken, process.env.NEW_SECRET_KEY)  
    req.body.email = userdatails.email 
    next();
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};


