const { Router } = require('express');

const { userRouters } = require('./userRouters');
const { skillsRouters } = require('./skillsRouters');
const { experienceRouters } = require('./experienceRouters');
const { educationRouters } = require('./educationRouters');
const { coursesRouters } = require('./coursesRouters');
const { authRouters } = require('./authRouter');
const { getUser } = require('../models/userModel');
const { getSkills } = require('../models/skillsModel');
const { getExperiences } = require('../models/experienceModels');
const { auth } = require('../middlewares/auth.middleware');

const router = Router();

router.get('/profile', async (req, res) => {
  let user = await getUser();
  let skills = await getSkills();
  let experiences = await getExperiences();
  res.render('profile', {
    user,
    skills,
    experiences,
  });
});

router.use(authRouters);
router.use(auth);
router.use('/', userRouters);
router.use('/skills', skillsRouters);
router.use('/experience', experienceRouters);
router.use('/education', educationRouters);
router.use('/courses', coursesRouters);

module.exports = router;
