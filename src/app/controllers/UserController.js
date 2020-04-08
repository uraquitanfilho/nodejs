import User from '../models/relational/User';

class UserController {
  async index(req, res) {
    const user = await User.findAll();
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(200).json();
  }
}

export default new UserController();
