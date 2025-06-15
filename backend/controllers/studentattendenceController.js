const Attendance = require('../models/studenattendence');

// ✅ Mark Attendance (Instructor Only)
exports.markAttendance = async (req, res) => {
  const { studentId, classId, date, status } = req.body;
  const instructorId = req.user.id; // comes from JWT after auth middleware

  try {
    // Prevent duplicate marking for same day
    const existing = await Attendance.findOne({ studentId, classId, date });
    if (existing) {
      return res.status(400).json({ message: 'Attendance already marked for this student on this date' });
    }

    const attendance = new Attendance({
      studentId,
      classId,
      instructorId,
      date,
      status
    });

    await attendance.save();
    res.status(201).json({ message: 'Attendance marked successfully', attendance });
  } catch (error) {
    res.status(500).json({ message: 'Error marking attendance', error });
  }
};

// 📄 Get Attendance for a Student
exports.getStudentAttendance = async (req, res) => {
  const { studentId } = req.params;
  try {
    const records = await Attendance.find({ studentId }).populate('classId', 'name').sort({ date: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving attendance', error });
  }
};
