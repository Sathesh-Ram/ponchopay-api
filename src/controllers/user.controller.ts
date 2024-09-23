import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  /**
   * Create a new user
   * POST /api/users
   */
  async createUser(req: Request, res: Response) {
    try {
      const user = await UserService.createUser(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: (error as Error).message });
    }
  }
}

export default new UserController();
