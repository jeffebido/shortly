import { Router } from 'express';
import { getUserInfo } from '../controllers/usersController.js';
import { tokenMiddleware } from '../middlewares/tokenMiddleware.js';

const router = Router();



router.get("/users/me", tokenMiddleware, getUserInfo);

export default router;