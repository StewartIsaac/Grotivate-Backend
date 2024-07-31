const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendMail = require('../mailer.js');

// Signup
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({email})
    if (existingUser){
        return res.status(400).json({message:"User account already exists... Login instead"})
    }
    const existingUser2 = await User.findOne({name})
    if (existingUser2){
        return res.status(400).json({message:"Username used alraedy... Choose another"})
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    await sendMail(user.name, user.email, "Account Creation", `Welocme ${user.name}. Your Grotivate Account Was Created`)
    return res.status(201).json({ message: 'User created successfully' });
    
  } catch (error) {
   return res.status(500).json({ error: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
   return res.json({ token });
  } catch (error) {
   return res.status(500).json({ error: error.message });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const resetLink = `http://yourapp.com/reset-password?token=${token}`; // update this link

    sendMail(user.name, user.email, 'Password Reset', `Click the link to reset your password: ${resetLink}`);

  return  res.json({ message: 'Password reset email sent' });
  } catch (error) {
   return res.status(500).json({ error: error.message });
  }
};

// Subscribe
exports.subscribe = async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, { isSubscribed: true }, { new: true });
    res.json({ message: 'Subscription successful', user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};