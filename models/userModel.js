const mongoose = require('./index');

const userSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  f_name: { type: String },
  l_name: { type: String },
  phone_code: { type: String },
  phone_number: { type: String },
  email: { type: String, required: true },
  gender: { type: String },
  user_avatar: { type: String },
});

const User = mongoose.model('User', userSchema);

const getUser = () => User.findOne({});

const updateInfo = (user_info) => {
  const {
    user_id,
    f_name,
    l_name,
    phone_code,
    phone_number,
    email,
    gender,
  } = user_info;

  return User.updateOne(
    { _id: user_id },
    {
      f_name,
      l_name,
      phone_code,
      phone_number,
      email,
      gender,
    }
  );
};

const updateAvatar = (user_id, user_avatar) => {
  return User.updateOne({ _id: user_id }, { user_avatar });
};

module.exports = { getUser, updateInfo, updateAvatar };
