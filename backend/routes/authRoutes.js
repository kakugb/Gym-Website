const express = require('express');
const{ protect,authorizeRoles } = require("../middlewares/authMiddleware")
const { registerUser, loginUser,updateUser,deleteUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/:id', protect, authorizeRoles('admin'), updateUser);
router.delete('/:id', protect, authorizeRoles('admin'), deleteUser);


module.exports = router;
