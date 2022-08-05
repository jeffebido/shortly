import { Router } from 'express';
import { shorten } from '../controllers/urlsController.js';
import { tokenMiddleware } from '../middlewares/tokenMiddleware.js';
import { urlsMiddleware } from '../middlewares/urlsMiddleware.js';

const router = Router();

router.use(tokenMiddleware);

router.post("/shorten", urlsMiddleware, shorten);


export default router;