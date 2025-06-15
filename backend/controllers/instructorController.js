const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
exports.getInstructors = async (req, res) => {
    try {
      const instructors = await User.find({ role: 'instructor' }).select('-password'); // exclude password
      res.json(instructors);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  exports.getInstructorById = async (req, res) => {
    try {
      const instructor = await User.findOne({ _id: req.params.id, role: 'instructor' }).select('-password');
      if (!instructor) return res.status(404).json({ message: 'Instructor not found' });
      res.json(instructor);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  exports.updateInstructorById = async (req, res) => {
    try {
      const updatedInstructor = await User.findOneAndUpdate(
        { _id: req.params.id, role: 'instructor' },
        req.body,
        { new: true }
      ).select('-password');
  
      if (!updatedInstructor) return res.status(404).json({ message: 'Instructor not found or not valid role' });
  
      res.json({ message: 'Instructor updated', instructor: updatedInstructor });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  exports.deleteInstructorById = async (req, res) => {
    try {
      const deleted = await User.findOneAndDelete({ _id: req.params.id, role: 'instructor' });
      if (!deleted) return res.status(404).json({ message: 'Instructor not found or not valid role' });
      res.json({ message: 'Instructor deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  
  