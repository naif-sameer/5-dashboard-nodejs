const { Router } = require('express');
const experienceController = require('../controllers/experienceController');
const router = Router();

router.get('/', experienceController.getExperiences);

// for now I will only use post for all these.
router.post('/add', experienceController.addExperience);
router.post('/update', experienceController.updateExperience);
router.post('/delete', experienceController.deleteExperience);

module.exports = {
  experienceRouters: router,
};
