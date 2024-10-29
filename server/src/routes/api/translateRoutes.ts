import express from 'express';
import { getTranslations } from '../../controllers/translateController.js';
const router = express.Router();
router.post('/', getTranslations);
export { router as translationRouter };
