import express from 'express';
import type { Request, Response } from 'express';
import { User } from '../../models/index.js';
import { BodyInfo } from '../../models/index.js';

const router = express.Router();

// GET api/bodyInfo/id - Get all body info
router.get('/:id', async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// POST api/bodyInfo/ - Create a new body info
router.post('/', async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

export { router as bodyInfoRouter };