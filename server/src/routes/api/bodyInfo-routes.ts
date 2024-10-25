import express from 'express';
import type { Request, Response } from 'express';
import { BodyInfo, User} from '../../models/index.js';

const router = express.Router();

// GET api/bodyInfo/id - Get all body info
router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        // Find BodyInfo by ID, including associated User
        const bodyInfo = await BodyInfo.findOne({
            where: { id },
            include: [{ model: User }],
        });

        if (!bodyInfo) {
            res.status(404).json({ message: 'Body info not found' });
        }

        res.status(200).json(bodyInfo);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// POST api/bodyInfo/ - Create a new body info
router.post('/', async (req: Request, res: Response) => {
    const { calories, protein, carbs, fat, percentage, userId } = req.body;
    try {
        // Check if user exists before creating BodyInfo
        const user = await User.findByPk(userId);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        }

        // Create new BodyInfo tied to the specified user
        const newBodyInfo = await BodyInfo.create({
            calories,
            protein,
            carbs,
            fat,
            percentage,
            userId,
        });

        res.status(201).json(newBodyInfo);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

export { router as bodyInfoRouter };