const mongoose = require('mongoose');

const livestockSchema = new mongoose.Schema({
  type: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  healthStatus: { type: String, required: true },
});

module.exports = mongoose.model('Livestock', livestockSchema);