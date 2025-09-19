import express from "express";
import AuthRouter from "./src/routes/authRouter.js";
import UserRouter from "./src/routes/userRouter.js";

const app = express();

app.use("/auth",AuthRouter);//middleware call for authentication details of user
app.use("/user",UserRouter);//middleware call for user details

app.get("/", (req, res) => {
  res.status(200).json({ message: "server connected successfully" });
});

app.listen(5000, () => {
  console.log("server is running at port 5000");
});
