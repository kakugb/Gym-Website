const express = require('express');
const { protect, authorizeRoles } = require('../middlewares/authMiddleware');
const { addStudent, getStudents, getStudentById,updateStudent,deleteStudent } = require('../controllers/studentController');

const router = express.Router();

router.post('/', protect, authorizeRoles('admin', 'instructor'), addStudent); // Only admin and instructor can add students
router.get('/',  getStudents); // Get all students
router.get('/:id', protect, getStudentById); // Get a specific student's details
router.put('/:id', protect, authorizeRoles('admin','instructor'), updateStudent);
router.delete('/:id', protect, authorizeRoles('admin','instructor'), deleteStudent);

module.exports = router;
