import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import AuthRoutes from "./src/routes/authRoutes.js";
import connectDB from "./src/config/db.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/auth", AuthRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Server is Running" });
});

app.use((err, req, res, next) => {
  const message = err.message || "Internal Server Error";
  const StatusCode = err.statusCode || 500;
  res.status(StatusCode).json({ message });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log("server started at", port);
  connectDB();
});
