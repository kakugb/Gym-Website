const express = require('express');
const { protect, authorizeRoles } = require('../middlewares/authMiddleware');
const { createAcademy, getAcademies,updateAcademy,deleteAcademy } = require('../controllers/academyController');

const router = express.Router();

router.post('/', protect, authorizeRoles('admin'), createAcademy);
router.get('/', protect, getAcademies);
router.put('/:id', protect, authorizeRoles('admin'), updateAcademy);
router.delete('/:id', protect, authorizeRoles('admin'), deleteAcademy);


module.exports = router;
