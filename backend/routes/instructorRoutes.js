const express = require('express');
const { protect, authorizeRoles } = require('../middlewares/authMiddleware');
const { getInstructors,getInstructorById,updateInstructorById,deleteInstructorById } = require('../controllers/instructorController');
// routes/userRoutes.js
const router = express.Router();
router.get('/', protect, authorizeRoles('admin'), getInstructors);
router.get('/:id', protect, authorizeRoles('admin'), getInstructorById);
router.put('/:id', protect, authorizeRoles('admin'), updateInstructorById);
router.delete('/:id', protect, authorizeRoles('admin'), deleteInstructorById);



module.exports = router;