const experienceModels = require('../models/experienceModels');

// get
const getExperiences = async (req, res) => {
  const experiences = await experienceModels.getExperiences();
  res.render('experience', { experiences });
};

// add
const addExperience = async (req, res) => {
  try {
    let result = await experienceModels.addExperience(req.body);

    res.redirect('/experience');
  } catch (err) {
    res.json(err.message);
  }
};

// update
const updateExperience = async (req, res) => {
  try {
    let result = await experienceModels.updateExperience(req.body);

    res.redirect('/experience');
  } catch (err) {
    res.json(err.message);
  }
};

// delete
const deleteExperience = async (req, res) => {
  try {
    let result = await experienceModels.deleteExperience(req.body);

    console.log(result)
    res.redirect('/experience');
  } catch (err) {
    res.json(err.message);
  }
};

module.exports = {
  getExperiences,
  addExperience,
  updateExperience,
  deleteExperience,
};
