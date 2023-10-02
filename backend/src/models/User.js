const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  uso: {type: Number, default: 1 },
  name: String,
  idade: Number,
  email: String,
  image: String,
  password: String,
  created_at: {type: Date, default: Date.now }
})

const User = mongoose.model('User',UserSchema)

module.exports = User;