const { Router } = require('express');
const skillsController = require('../controllers/skillsController');
const router = Router();

router.get('/', skillsController.skillsInfo);

// for now I will only use post for all these.
router.post('/add', skillsController.addSkill);
router.post('/update', skillsController.updateSkill);
router.post('/delete', skillsController.deleteSkill);

module.exports = {
  skillsRouters: router,
};
