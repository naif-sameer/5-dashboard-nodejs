const { Router } = require('express');
const { getUser } = require('../models/user');
const updateRouter = require('./update');

const router = Router();

router.use(updateRouter);

/* GET index page. */
router.get('/', async (req, res) => {
  const { _id: user_id } = await getUser();
  res.render('index', { user_id });
});

router.get('/skills', (req, res) => {
  res.render('skills');
});

router.get('/experience', (req, res) => {
  res.render('experience');
});

router.get('/education', (req, res) => {
  res.render('education');
});

router.get('/courses', (req, res) => {
  res.render('courses');
});

// update user data

module.exports = router;
