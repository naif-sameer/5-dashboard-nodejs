const courseModels = require('../models/courseModels');

// get
const getCourses = async (req, res) => {
  const courses = await courseModels.getCourses();
  res.render('courses', { courses });
};

// add
const addCourse = async (req, res) => {
  try {
    let result = await courseModels.addCourse(req.body);

    res.redirect('/courses');
  } catch (err) {
    res.json(err.message);
  }
};

// update
const updateCourse = async (req, res) => {
  try {
    let result = await courseModels.updateCourse(req.body);

    res.redirect('/courses');
  } catch (err) {
    res.json(err.message);
  }
};

// delete
const deleteCourse = async (req, res) => {
  try {
    let result = await courseModels.deleteCourse(req.body);

    res.redirect('/courses');
  } catch (err) {
    res.json(err.message);
  }
};

module.exports = {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
};
