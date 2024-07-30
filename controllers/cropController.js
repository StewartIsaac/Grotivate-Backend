const Crop = require('../models/Crop');

// Get all crops
exports.getCrops = async (req, res) => {
  try {
    const crops = await Crop.find();
    res.json(crops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new crop
exports.addCrop = async (req, res) => {
  const { name, plantingDate, harvestDate } = req.body;
  try {
    const newCrop = new Crop({ name, plantingDate, harvestDate });
    await newCrop.save();
    res.status(201).json(newCrop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing crop
exports.updateCrop = async (req, res) => {
  const { id } = req.params;
  const { name, plantingDate, harvestDate } = req.body;
  try {
    const updatedCrop = await Crop.findByIdAndUpdate(id, { name, plantingDate, harvestDate }, { new: true });
    res.json(updatedCrop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a crop
exports.deleteCrop = async (req, res) => {
  const { id } = req.params;
  try {
    await Crop.findByIdAndDelete(id);
    res.json({ message: 'Crop deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};