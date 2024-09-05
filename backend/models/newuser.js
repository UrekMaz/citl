const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the User schema
const newuserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  userId: { type: String, required: true, unique: true },//username

    passwordHash: { type: String, required: true },

  role: {
    type: String,
    enum: ['startup', 'investor'], 
    default: 'startup', 
  },
}, {
  timestamps: true, // Automatically creates `createdAt` and `updatedAt` fields
});


const Newuser = mongoose.model('Newuser', newuserSchema);

module.exports = Newuser;
