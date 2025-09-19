import express from 'express';
import {Register,Login,Logout,ForgetPass} from "../controller/authController.js"

const router=express.Router();

router.post("/register", Register); 

router.post("/login", Login);

router.get("/logout", Logout);

router.patch("/forgetPass",ForgetPass)

export default router;