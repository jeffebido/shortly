import { Router } from 'express';
import { signUp, signIn } from '../controllers/authController.js';
import { signUpMiddleware, signInMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();

router.post("/signup", signUpMiddleware, signUp);

router.post("/signin", signInMiddleware, signIn);

export default router;