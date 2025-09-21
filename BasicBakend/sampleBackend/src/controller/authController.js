import User from "../models/userModel.js";
export const Register=async (req, res) => {
  // res.status(200).json({ message: "User registration successfull" });
  try {
    const {fullName ,email, password}=req.body;
    if(!fullName || !email || !password)
    {
      console.log("Error 404 : All fields required")
      return;
    }
    const newUser=await User.create({
      fullName,
      email,
      password,
    });
    res.status(201).json({message:`welcome ${newUser.fullName}`});
  } catch (error) {
    console.log(error)
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