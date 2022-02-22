const { Router } = require('express');

const userInfoController = require('../controllers/userInfoController');
const fileHandler = require('../utils/multerFiles');

const router = Router();

/* GET index page. */
router.get('/', userInfoController.userInfo);

// user info
router.post('/update-info', userInfoController.updateUserInfo);

router.post(
  '/update-avatar',
  fileHandler.single('user_avatar'),
  userInfoController.updateUserAvatar
);

module.exports = {
  userRouters: router,
};
