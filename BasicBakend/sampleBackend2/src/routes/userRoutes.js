import express from "express";
import { ChangePass, Delete, Update } from "../controllers/userController.js";
import { LoginCheck } from "../middlewares/authMiddleware.js";

const router=express.Router();

router.put("/update",LoginCheck,Update);

router.patch("/changePass",ChangePass);

router.delete("/delete",Delete);

export default router;