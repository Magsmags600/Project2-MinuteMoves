import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { bodyInfoRouter } from './bodyInfo-routes.js';
import {mealRouter} from './meal-routes.js';
const router = Router();

router.use('/users', userRouter);
router.use('/bodyInfo', bodyInfoRouter);
router.use('/meal-recommendations', mealRouter);

export default router;
