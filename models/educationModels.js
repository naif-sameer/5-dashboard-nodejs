const mongoose = require('./index');

const educationsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  school_name: { type: String, required: true },
  place: { type: String, required: true },
  time: { type: String, required: true },
  description: { type: String, required: true },
  is_active: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
});

const Educations = mongoose.model('Educations', educationsSchema);

// get
const getEducations = () => Educations.find({ is_active: 1 });

// add
const addEducation = (education_info) => {
  console.log(education_info);
  const { title, school_name, place, time, description } = education_info;

  return Educations.insertMany([
    {
      title,
      school_name,
      place,
      time,
      description,
    },
  ]);
};

// update
const updateEducation = (education_info) => {
  console.log(education_info);
  const { education_id, title, school_name, place, time, description } =
    education_info;

  return Educations.updateOne(
    { _id: education_id },
    { title, school_name, place, time, description }
  );
};

// delete
const deleteEducation = (education_info) => {
  const { education_id } = education_info;
  Educations.find({ _id: education_id }).then((e) =>
    console.log('data', e, education_id)
  );
  return Educations.updateOne({ _id: education_id }, { is_active: 0 });
};

module.exports = {
  getEducations,
  addEducation,
  updateEducation,
  deleteEducation,
};
