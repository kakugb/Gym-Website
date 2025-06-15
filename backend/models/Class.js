const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  title: { type: String, required: true },
  schedule: { 
    start: { type: Date, required: true }, // Start date/time
    end: { type: Date, required: true },   // End date/time
    weekdays: [{ type: String, enum: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }] // Array of weekdays (optional)
  },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Instructor is a User
  academy: { type: mongoose.Schema.Types.ObjectId, ref: 'Academy', required: true }, // Academy to which class belongs
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }] // Students enrolled in this class
}, { timestamps: true });

module.exports = mongoose.model('Class', classSchema);
