const educationModels = require('../models/educationModels');

// get
const getEducations = async (req, res) => {
  const educations = await educationModels.getEducations();
  res.render('education', { educations });
};

// add
const addEducation = async (req, res) => {
  try {
    let result = await educationModels.addEducation(req.body);

    res.redirect('/education');
  } catch (err) {
    res.json(err.message);
  }
};

// update
const updateEducation = async (req, res) => {
  try {
    let result = await educationModels.updateEducation(req.body);

    res.redirect('/education');
  } catch (err) {
    res.json(err.message);
  }
};

// delete
const deleteEducation = async (req, res) => {
  try {
    let result = await educationModels.deleteEducation(req.body);

    res.redirect('/education');
  } catch (err) {
    res.json(err.message);
  }
};

module.exports = {
  getEducations,
  addEducation,
  updateEducation,
  deleteEducation,
};
