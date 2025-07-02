const mongoose = require('mongoose');

const usageSchema = new mongoose.Schema({
  userId: String,
  date: String,
  amount: Number
});

module.exports = mongoose.model('Usage', usageSchema);
