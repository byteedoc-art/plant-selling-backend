import express from 'express';
import handleLogin from '../controllers/login.js';
import verifyRole from '../middleware/verifyRole.js';
const router = express.Router();

router.get("/profile",verifyRole,handleLogin)



export default router;

