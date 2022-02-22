const { Router } = require('express');
const { skillsInfo } = require('../controllers/skillsController');
const router = Router();

router.get('/', skillsInfo);

module.exports = {
  skillsRouters: router,
};
