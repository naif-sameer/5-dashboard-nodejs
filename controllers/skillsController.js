const skillsModel = require('../models/skillsModel');

// get
const skillsInfo = async (req, res) => {
  const skills = await skillsModel.getSkills();
  res.render('skills', { skills });
};

// add
const addSkill = async (req, res) => {
  try {
    let result = await skillsModel.addSkill(req.body);

    res.redirect('/skills');
  } catch (err) {
    res.json(err.message);
  }
};

// update
const updateSkill = async (req, res) => {
  try {
    let result = await skillsModel.updateSkill(req.body);

    res.redirect('/skills');
  } catch (err) {
    res.json(err.message);
  }
};

// delete
const deleteSkill = async (req, res) => {
  try {
    let result = await skillsModel.deleteSkill(req.body);

    res.redirect('/skills');
  } catch (err) {
    res.json(err.message);
  }
};

module.exports = {
  skillsInfo,
  addSkill,
  updateSkill,
  deleteSkill,
};
