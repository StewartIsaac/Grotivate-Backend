const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  plantingDate: { type: Date, required: true },
  harvestDate: { type: Date, required: true },
});

module.exports = mongoose.model('Crop', cropSchema);