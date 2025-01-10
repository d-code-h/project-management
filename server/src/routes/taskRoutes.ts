import { Router } from 'express';
import { createTasks, getTasks } from '../controllers/TaskController';

const router = Router();

router.get('/', getTasks);
router.post('/', createTasks);

export default router;
