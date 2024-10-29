import { Router } from 'express';
import { getMealRecommendations } from './openAI.js';
const router = Router();

router.post('/', getMealRecommendations);


export { router as mealRouter };