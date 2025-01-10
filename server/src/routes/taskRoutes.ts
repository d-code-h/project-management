import { Router } from 'express';
import {
  createTasks,
  getTasks,
  updateTaskStatus,
} from '../controllers/TaskController';

const router = Router();

router.get('/', getTasks);
router.post('/', createTasks);
router.patch('/:taskId/status', updateTaskStatus);

export default router;
