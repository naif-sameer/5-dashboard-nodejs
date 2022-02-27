const { Router } = require('express');
const educationController = require('../controllers/educationController');
const router = Router();

router.get('/', educationController.getEducations);

// for now I will only use post for all these.
router.post('/add', educationController.addEducation);
router.post('/update', educationController.updateEducation);
router.post('/delete', educationController.deleteEducation);

module.exports = {
  educationRouters: router,
};
