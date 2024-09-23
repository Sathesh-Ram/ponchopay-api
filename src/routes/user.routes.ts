import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

/**
 * Route to create a user
 * POST /api/users
 */
router.post('/users', UserController.createUser);

export default router;
