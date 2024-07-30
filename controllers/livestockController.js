const Livestock = require('../models/Livestock');

// Get all livestock
exports.getLivestock = async (req, res) => {
  try {
    const livestock = await Livestock.find();
    res.json(livestock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new livestock
exports.addLivestock = async (req, res) => {
  const { type, breed, age, healthStatus } = req.body;
  try {
    const newLivestock = new Livestock({ type, breed, age, healthStatus });
    await newLivestock.save();
    res.status(201).json(newLivestock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing livestock
exports.updateLivestock = async (req, res) => {
  const { id } = req.params;
  const { type, breed, age, healthStatus } = req.body;
  try {
    const updatedLivestock = await Livestock.findByIdAndUpdate(id, { type, breed, age, healthStatus }, { new: true });
    res.json(updatedLivestock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a livestock
exports.deleteLivestock = async (req, res) => {
  const { id } = req.params;
  try {
    await Livestock.findByIdAndDelete(id);
    res.json({ message: 'Livestock deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};