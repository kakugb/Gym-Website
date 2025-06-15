const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  academy: { type: mongoose.Schema.Types.ObjectId, ref: 'Academy' },
  beltLevel: { type: String, enum: ['white', 'yellow', 'green', 'blue', 'black'], default: 'white' },
  joinDate: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
