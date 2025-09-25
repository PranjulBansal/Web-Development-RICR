import User from "../models/userModel.js";
export const Register=async (req, res, next) => {
  // res.status(200).json({ message: "User registration successfull" });
  try {
    const {fullName ,email, password}=req.body;  
    if(!fullName || !email || !password)
    {
      // console.log("Error 400 : All fields required")
      const error=new Error("All Fields Required");
      error.statusCode=400;
      return next(error);
    }
    const existingUser=await User.findOne({email});
    if(existingUser)
    {
      const error=new Error("Email Already Registered");
      error.statusCode=409;
      return next(error);
    }
    const newUser=await User.create({
      fullName,
      email,
      password,
    });
    res.status(201).json({message:`welcome ${newUser.fullName}`});
  } catch (error) {
    next(error)

  }
}

export const Login =(req, res) => {
  res.status(200).json({ message: "User login Successfully" });
}

export const Logout=(req, res) => {
  res.status(200).json({ message: "User logout Successfully" });
}

export const ForgetPass=(req, res) => {
  res.status(200).json({ message: "Forget Password Successfully" });
}