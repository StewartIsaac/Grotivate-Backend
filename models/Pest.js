const mongoose = require('mongoose');

const pestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  controlMethods: { type: String, required: true },
});

module.exports = mongoose.model('Pest', pestSchema);