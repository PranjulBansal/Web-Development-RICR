import dotenv from 'dotenv';
dotenv.config();//find env and run env files and its variable
import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import AuthRouter from "./src/routes/authRouter.js";
import UserRouter from "./src/routes/userRouter.js";
import connectDB from './src/config/db.js';

const app = express();

app.use(cors({}))//middleware call
app.use(express.json());//middleware call
app.use(morgan("dev"));//to update with statement
app.use("/auth",AuthRouter);//middleware call for authentication details of user
app.use("/user",UserRouter);//middleware call for user details

app.get("/", (req, res) => {
  res.status(200).json({ message: "server connected successfully" });
});

app.use((err,req,res,next)=>{
  const errorMessage=err.message || "Internal Server Error";
  const errorCode=err.statusCode || 500;
  res.status(errorCode).json({message:errorMessage});
})
//to check the env variable created correct or not
// let Port;
// if(!process.env.PORT)
// {
//   Port=5000;
// }
// else{
//   Port=process.env.PORT;
// }
//alternate way to create if else condition
const port=process.env.PORT||5000;

app.listen(port, () => {
  console.log("server is running at port",port);
  connectDB();//function call for mongodb connection from db.js file
});
