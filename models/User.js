
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  otp: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isSubscribed: { 
    type: Boolean, 
    default: false 
  },
 }, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;