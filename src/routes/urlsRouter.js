import { Router } from 'express';
import { shorten, getUrlById } from '../controllers/urlsController.js';
import { tokenMiddleware } from '../middlewares/tokenMiddleware.js';
import { urlsMiddleware } from '../middlewares/urlsMiddleware.js';

const router = Router();



router.post("/urls/shorten", tokenMiddleware, urlsMiddleware, shorten);

router.get("/urls/:id", urlsMiddleware, getUrlById);

export default router;