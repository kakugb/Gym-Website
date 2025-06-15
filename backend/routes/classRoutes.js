const express = require('express');
const { protect, authorizeRoles } = require('../middlewares/authMiddleware');
const { createClass, getClasses, getClassById, enrollStudentInClass,updateClass,deleteClass} = require('../controllers/classController');

const router = express.Router();

router.post('/', protect, authorizeRoles('admin', 'instructor'), createClass); // Only admin and instructor can create classes
router.get('/', protect, getClasses); // Get all classes
router.get('/:id', protect, getClassById); // Get a specific class
router.post('/:classId/enroll', protect, authorizeRoles('admin', 'instructor'), enrollStudentInClass); // Enroll a student
router.put('/:id', protect, authorizeRoles('admin'), updateClass);
router.delete('/:id', protect, authorizeRoles('admin'), deleteClass);

module.exports = router;
