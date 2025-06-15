const express = require('express');
const router = express.Router();
const  {addFee,updateFeeStatus,getStudentFees} = require('../controllers/studentFeeController');
const { protect, authorizeRoles } = require('../middlewares/authMiddleware');


// Instructor/Admin adds fee
router.post('/add', protect, authorizeRoles('admin', 'instructor'), addFee);

// Update fee status
router.put('/update/:feeId', protect,authorizeRoles('admin', 'instructor'),updateFeeStatus);

// View fees for a student
router.get('/:studentId', protect,getStudentFees);

module.exports = router;
