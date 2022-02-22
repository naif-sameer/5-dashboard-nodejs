const mongoose = require('./index');

const userSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  f_name: { type: String },
  l_name: { type: String },
  phone_code: { type: String },
  phone_number: { type: String },
  email: { type: String, required: true },
  gender: { type: String },
  date: { type: Date },
  user_avatar: { type: String },
});

const User = mongoose.model('User', userSchema);

const getUser = () => User.findOne({});

module.exports = { User, getUser };
