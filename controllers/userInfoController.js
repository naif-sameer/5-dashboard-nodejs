const { getUser } = require('../models/userModel');
const userModel = require('../models/userModel');

const userInfo = async (req, res) => {
  let user_info = await getUser();

  if (user_info._id) {
    res.render('index', {
      user_info,
    });
  } else {
    res.render('index', {
      user_info: {
        f_name: 'Gust',
        l_name: 'super man',
        phone_code: '0',
        phone_number: '0000',
        email: 'gust@gust.com',
        gender: 'others',
        user_avatar: 'avatar.jpg',
      },
    });
  }
};

const updateUserInfo = async (req, res) => {
  try {
    let result = await userModel.updateInfo(req.body);
    // res.json(result);
    res.redirect('/');
  } catch (err) {
    res.json(err);
  }
};

const updateUserAvatar = async (req, res) => {
  if (req.file !== undefined) {
    const { user_id } = req.body;
    const { filename } = req.file;
    let result = await userModel.updateAvatar(user_id, filename);

    // res.json(result);
    res.redirect('/');
  } else res.redirect('/');
};

module.exports = {
  userInfo,
  updateUserInfo,
  updateUserAvatar,
};
