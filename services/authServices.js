// services/AuthService.js
const bcrypt = require('bcrypt');
const User = require('./models/User');

class AuthService {
  static async register(email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    return newUser.save();
  }

  static async login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('User not found');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Invalid password');
    }

    return user;
  }
}

module.exports = AuthService;
