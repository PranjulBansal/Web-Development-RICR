import express from 'express';
import { Update,ChangePass,Delete } from '../controller/userController.js';
import { LoginCheck } from '../middleware/authMiddleware.js';
const router=express.Router();

router.put("/update", LoginCheck, Update);

router.patch("/changePass",LoginCheck, ChangePass);

router.delete("/delete", LoginCheck, Delete );
export default router;