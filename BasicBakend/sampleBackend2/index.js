import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import AuthRouter from './src/routes/authRoutes.js';
import userRouter from './src/routes/userRoutes.js';
const app=express();

//By default, browsers block requests from different origins for security reasons.
// cors() comes from the cors package.
//Passing {} means default configuration, allowing all origins (*) to access your backend.
// app.use(cors({
//   origin: "http://localhost:3000", // only allow frontend at port 3000
//   methods: ["GET", "POST"],       // allowed HTTP methods
//   credentials: true               // allow cookies or auth headers
// }));

app.use(cors({}));//we passed inside the another request from different origin
app.use(express.json());//now we are sending the request in json format not only getting response in json format.
app.use(morgan("dev"));//update everything with statement and time of changes in any method
app.use("/auth",AuthRouter);
app.use("/user",userRouter);

app.get("/",(req,res)=>{
    res.status(200).json({message:"Server Connected Successfully in 2"});
});

const port= process.env.PORT||5000;

app.listen(5000,()=>{
    console.log("server is running at port",port);
})