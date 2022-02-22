const { Router } = require('express');
const { educationInfo } = require('../controllers/educationController');
const router = Router();

router.get('/', educationInfo);


module.exports = {
  educationRouters: router,
};
