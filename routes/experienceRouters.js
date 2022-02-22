const { Router } = require('express');
const { experienceInfo } = require('../controllers/experienceController');
const router = Router();

router.get('/', experienceInfo);

module.exports = {
  experienceRouters: router,
};
