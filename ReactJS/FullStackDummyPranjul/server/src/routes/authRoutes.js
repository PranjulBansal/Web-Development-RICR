import express from "express";
import { Register, Login, Upadate, Delete } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", Login);

router.post("/register", Register);

router.put("/update", Upadate);

router.delete("/delete", Delete);

export default router;
