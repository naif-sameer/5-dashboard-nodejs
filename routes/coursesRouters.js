const { Router } = require('express');
const coursesController = require('../controllers/coursesController');

const router = Router();

router.get('/', coursesController.getCourses);

// for now I will only use post for all these.
router.post('/add', coursesController.addCourse);
router.post('/update', coursesController.updateCourse);
router.post('/delete', coursesController.deleteCourse);

module.exports = {
  coursesRouters: router,
};
