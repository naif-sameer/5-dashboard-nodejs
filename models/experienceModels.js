const mongoose = require('./index');

const experiencesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  country: { type: String, required: true },
  work_time: { type: String, required: true },
  description: { type: String, required: true },
  is_active: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
});

const Experience = mongoose.model('Experience', experiencesSchema);

// get
const getExperiences = () => Experience.find({ is_active: 1 });

// add
const addExperience = (experience_info) => {
  console.log(experience_info);
  const { title, country, work_time, description } = experience_info;

  return Experience.insertMany([
    {
      title,
      country,
      work_time,
      description,
    },
  ]);
};

// update
const updateExperience = (experience_info) => {
  const { experience_id, title, progress_percent } = experience_info;

  return Experience.updateOne(
    { _id: experience_id },
    { title, progress_percent }
  );
};

// delete
const deleteExperience = (experience_info) => {
  const { experience_id } = experience_info;
  Experience.find({_id: experience_id}).then(e => console.log('data', e, experience_id))
  return Experience.updateOne({ _id: experience_id }, { is_active: 0 });
};

module.exports = {
  getExperiences,
  addExperience,
  updateExperience,
  deleteExperience,
};
