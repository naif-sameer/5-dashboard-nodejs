const mongoose = require('./index');

const coursesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  course_time: { type: String, required: true },
  description: { type: String, required: true },
  is_active: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
});

const Courses = mongoose.model('Courses', coursesSchema);

// get
const getCourses = () => Courses.find({ is_active: 1 });

// add
const addCourse = (course_info) => {
  console.log(course_info);
  const { title, course_time, description } = course_info;

  return Courses.insertMany([
    {
      title,
      course_time,
      description,
    },
  ]);
};

// update
const updateCourse = (course_info) => {
  console.log(course_info);
  const { course_id, title, course_time, description } = course_info;

  return Courses.updateOne(
    { _id: course_id },
    { title, course_time, description }
  );
};

// delete
const deleteCourse = (course_info) => {
  const { course_id } = course_info;
  Courses.find({ _id: course_id }).then((e) =>
    console.log('data', e, course_id)
  );
  return Courses.updateOne({ _id: course_id }, { is_active: 0 });
};

module.exports = {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
};
