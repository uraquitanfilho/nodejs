import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import * as Yup from 'yup';
import User from '../models/relational/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    /**
     * Using Yup to validate data
     */
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });
    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validation fails. Check email and password' });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    /**
     * checking email
     */
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    /**
     * check password
     */
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;
    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign(
        { id },
        crypto
          .createHash('md5')
          .update(authConfig.secret)
          .digest('hex'),
        { expiresIn: authConfig.expiresIn }
      ),
    });
  }
}

export default new SessionController();
