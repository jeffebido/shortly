import { Router } from 'express';
import { signUp, signIn } from '../controllers/authController.js';
import { signUpMiddleware, signInMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();

router.post("/sign-up", signUpMiddleware, signUp);

router.post("/sign-in", signInMiddleware, signIn);

export default router;