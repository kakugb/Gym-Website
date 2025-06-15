const express = require('express');
const router = express.Router();
const {markAttendance,getStudentAttendance} = require('../controllers/studentattendenceController');
const{ protect,authorizeRoles } = require("../middlewares/authMiddleware")

// Mark attendance — only instructors allowed
router.post('/mark',protect,authorizeRoles('instructor'), markAttendance);

// Get attendance of a student — accessible by any authenticated user (adjust as needed)
router.get('/:studentId',protect,getStudentAttendance);

module.exports = router;
