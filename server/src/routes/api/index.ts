import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { bodyInfoRouter } from './bodyInfo-routes.js';

const router = Router();

router.use('/users', userRouter);
router.get('/bodyInfo', bodyInfoRouter);

export default router;
