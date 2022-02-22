const mongoose = require('./index');

const skillsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  progress_percent: { type: Number, required: true },
  is_active: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
});

const Skills = mongoose.model('Skills', skillsSchema);

// get
const getSkills = () => Skills.find({ is_active: 1 });

// add
const addSkill = (skill_info) => {
  const { title, progress_percent } = skill_info;

  return Skills.insertMany([{ title, progress_percent }]);
};

// update
const updateSkill = (skill_info) => {
  const { skill_id, title, progress_percent } = skill_info;

  return Skills.updateOne({ _id: skill_id }, { title, progress_percent });
};

// delete
const deleteSkill = (skill_info) => {
  const { skill_id } = skill_info;

  return Skills.updateOne({ _id: skill_id }, { is_active: 0 });
};

module.exports = { getSkills, addSkill, updateSkill, deleteSkill };
