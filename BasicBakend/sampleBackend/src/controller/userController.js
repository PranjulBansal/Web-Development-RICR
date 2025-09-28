import bcrypt from "bcrypt";
export const Update=async(req, res,next) => {
  try {
    const{fullName}=req.body;
    if(!fullName)
    {
      const error=new Error("All fields Required");
      error.statusCode=400;
      return next(error);
    }
    const currentUser=req.user;
    currentUser.fullName=fullName;
    await currentUser.save();
     res.status(200).json({ message: "User Update Successfull" });
  } catch (error) {
    next(error);
  }
 
}

export const ChangePass=async(req, res,next) => {
  try {
    const {password}=req.body;
    if(!password)
    {
      const error=new Error("All Fields Required");
      error.statusCode=400;
      return next(error);
    }
    const currentUser=req.user;
    const hashedPassword=await bcrypt.hash(password,10);
    currentUser.password=hashedPassword;
    await currentUser.save();

    res.status(200).json({ message: "User Password successfully changed " });

  } catch (error) {
    next(error);
  }
}

export const Delete=async(req, res,next) => {
  try {
    res.clearCookie("HideAndSeek",{maxAge:0});
    const currentUser=req.user;
    await currentUser.deleteOne({email:currentUser.email});
    res.status(200).json({ message: "user information delete successfully" });

  } catch (error) {
    next(error);
  }
}
