const Class = require('../models/Class');
const Student = require('../models/Student');
const User = require('../models/User');
const Academy = require('../models/Academy');

exports.createClass = async (req, res) => {
  try {
    const { title, schedule, instructorId, academyId } = req.body;

    // Basic validation for required fields
    if (!title || !schedule || !schedule.start || !schedule.end || !instructorId || !academyId) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the instructor and academy exist
    const instructor = await User.findById(instructorId);
    if (!instructor || instructor.role !== 'instructor') {
      return res.status(404).json({ message: 'Instructor not found or invalid role' });
    }

    const academy = await Academy.findById(academyId);
    if (!academy) return res.status(404).json({ message: 'Academy not found' });

    // Create the new class
    const newClass = await Class.create({
      title,
      schedule,
      instructor: instructorId,
      academy: academyId
    });

    // Respond with the created class
    res.status(201).json(newClass);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getClasses = async (req, res) => {
  try {
    const classes = await Class.find()
      .populate('instructor', 'name email')
      .populate('academy', 'name location')
      .populate('students', 'user');
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getClassById = async (req, res) => {
  try {
    const classData = await Class.findById(req.params.id)
      .populate('instructor', 'name email')
      .populate('academy', 'name location')
      .populate('students', 'user');
    if (!classData) return res.status(404).json({ message: 'Class not found' });
    res.json(classData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.enrollStudentInClass = async (req, res) => {
  try {
    const { classId } = req.params;
    const { studentId } = req.body;

    // Check if class exists
    const classData = await Class.findById(classId);
    if (!classData) return res.status(404).json({ message: 'Class not found' });

    // Check if student exists
    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    // Add student to class
    classData.students.push(studentId);
    await classData.save();

    res.status(200).json({ message: 'Student enrolled successfully', classData });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// DELETE /api/classes/:id
exports.deleteClass = async (req, res) => {
  try {
    const deletedClass = await Class.findByIdAndDelete(req.params.id);
    if (!deletedClass) return res.status(404).json({ message: 'Class not found' });
    res.json({ message: 'Class deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// PUT /api/classes/:id
exports.updateClass = async (req, res) => {
  try {
    const updated = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Class not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

