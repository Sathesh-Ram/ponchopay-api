import User from '../models/user.model';

/**
 * UserService is responsible for handling user-related business logic.
 */
class UserService {
  /**
   * Create a new user
   * @param userData The user data for creating a new user
   */
  async createUser(userData: { name: string; email: string }) {
    return User.create(userData);
  }
}

export default new UserService();
