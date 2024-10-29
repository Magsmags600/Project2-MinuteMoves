import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { bodyInfoRouter } from './bodyInfo-routes.js';
import { translationRouter } from './translateRoutes.js';
const router = Router();
router.use ('/workoutplan',translationRouter);
router.use('/users', userRouter);
router.use('/bodyInfo', bodyInfoRouter);

export default router;
