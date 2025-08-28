import User from "../models/userModel.js";

export const Register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      const error = new Error("All Feilds Requird");
      error.statusCode = 400;
      return next(error);
    }

    const newUser = await User.create({ name, email, password });

    res.json({ message: "Registration SuccessFull", data: newUser });
  } catch (error) {
    next(error)
  }
};
export const Login = async (req, res,next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All Feilds Requird");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Invaild Emial/password");
      error.statusCode = 401;
      return next(error);
    }

    const isVerifed = existingUser.password === password;

    if (!isVerifed) {
      const error = new Error("Invaild Emial/password");
      error.statusCode = 401;
      return next(error);
    }

    res.json({ message: "Login SuccessFull", data: existingUser });
  } catch (error) {
    next(error)
  }
};
export const Upadate = (req, res) => {
  res.json({ message: "Server is Running on login" });
};
export const Delete = (req, res) => {
  res.json({ message: "Server is Running on login" });
};
