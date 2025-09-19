export const Register=(req, res) => {
  res.status(200).json({ message: "User registration successfull" });
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