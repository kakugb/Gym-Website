const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  month: {
    type: String, // e.g., "June 2025"
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Submitted'],
    default: 'Pending'
  },
  submissionDate: {
    type: Date
  }
}, { timestamps: true });

module.exports = mongoose.model('Fee', feeSchema);
