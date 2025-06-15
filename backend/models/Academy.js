const mongoose = require('mongoose');

const academySchema = new mongoose.Schema({
  name: String,
  location: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Academy', academySchema);
