const { getUser, User } = require('../models/userModel');

const userInfo = async (req, res) => {
  const { _id: user_id } = await getUser();
  res.render('index', { user_id });
};

const updateUserInfo = (req, res) => {
  const { f_name, l_name, phone_code, phone_number, email, gender, date } =
    req.body;

  console.log(req.body);

  const user = new User({
    f_name,
    l_name,
    phone_code,
    phone_number,
    email,
    gender,
    date,
  });

  user
    .save()
    .then(() => res.redirect('/'))
    .catch((err) => res.json(err.message));
};

const updateUserAvatar = (req, res) => {
  const { user_id } = req.body;

  if (req.file !== undefined) {
    User.updateOne(
      { _id: user_id },
      { user_avatar: req.file.filename },
      function (err, doc) {
        if (err) return res.json(err);
        return res.redirect('/');
      }
    );
  } else {
    res.redirect('/');
  }
};

module.exports = {
  userInfo,
  updateUserInfo,
  updateUserAvatar,
};
