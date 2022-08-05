import { Router } from 'express';
import { shorten, getUrlById, openUrl, deleteUrlById } from '../controllers/urlsController.js';
import { tokenMiddleware } from '../middlewares/tokenMiddleware.js';
import { urlsMiddleware } from '../middlewares/urlsMiddleware.js';

const router = Router();



router.post("/urls/shorten", tokenMiddleware, urlsMiddleware, shorten);

router.get("/urls/:id",  getUrlById);
router.get("/urls/open/:shortUrl",  openUrl);
router.delete("/urls/:id", tokenMiddleware,  deleteUrlById);

export default router;