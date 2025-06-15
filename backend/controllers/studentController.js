const Student = require('../models/Student');
const User = require('../models/User');
const Academy = require('../models/Academy');

exports.addStudent = async (req, res) => {
  try {
    const { userId, academyId, beltLevel } = req.body;

    // Check if the user and academy exist
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const academy = await Academy.findById(academyId);
    if (!academy) return res.status(404).json({ message: 'Academy not found' });

    // Create new student record
    const student = await Student.create({
      user: userId,
      academy: academyId,
      beltLevel,
      joinDate: Date.now()
    });

    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find()
      .populate('user', 'name email')
      .populate('academy', 'name location');
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
      .populate('user', 'name email')
      .populate('academy', 'name location');
      console.log(student)
    if (!student) return res.status(404).json({ message: 'Student not found' });
    
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// DELETE /api/students/:id
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// PUT /api/students/:id
exports.updateStudent = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Student not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


