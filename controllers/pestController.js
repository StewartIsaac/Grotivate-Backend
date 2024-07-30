const Pest = require('../models/Pest');

// Get all pests
exports.getPests = async (req, res) => {
  try {
    const pests = await Pest.find();
    res.json(pests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new pest
exports.addPest = async (req, res) => {
  const { name, description, controlMethods } = req.body;
  try {
    const newPest = new Pest({ name, description, controlMethods });
    await newPest.save();
    res.status(201).json(newPest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing pest
exports.updatePest = async (req, res) => {
  const { id } = req.params;
  const { name, description, controlMethods } = req.body;
  try {
    const updatedPest = await Pest.findByIdAndUpdate(id, { name, description, controlMethods }, { new: true });
    res.json(updatedPest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a pest
exports.deletePest = async (req, res) => {
  const { id } = req.params;
  try {
    await Pest.findByIdAndDelete(id);
    res.json({ message: 'Pest deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};