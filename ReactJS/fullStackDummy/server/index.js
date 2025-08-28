import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from 'cors'
import connectDB from "./src/config/db.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Server Connected" });
});
app.get("/pranjul", (req, res) => {
  res.json({ message: "Server sucessfull Connected" });
});


const port = process.env.PORT || 5000;
app.listen(port, async () => {
  console.log("Server Started at", port);
//   connectDB();
});
