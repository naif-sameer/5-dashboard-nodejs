const { Router } = require('express');

const { userRouters } = require('./userRouters');
const { skillsRouters } = require('./skillsRouters');
const { experienceRouters } = require('./experienceRouters');
const { educationRouters } = require('./educationRouters');
const { coursesRouters } = require('./coursesRouters');

const router = Router();

router.use('/', userRouters);
router.use('/skills', skillsRouters);
router.use('/experience', experienceRouters);
router.use('/education', educationRouters);
router.use('/courses', coursesRouters);

module.exports = router;
