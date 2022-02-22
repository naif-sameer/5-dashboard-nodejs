const { Router } = require('express');
const { coursesInfo } = require('../controllers/coursesController');

const router = Router();

router.get('/', coursesInfo);

module.exports = {
  coursesRouters: router,
};
