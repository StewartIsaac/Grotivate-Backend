const Farm = require("../models/Farm");

exports.createFarm = async (req, res) => {
  try {
    const { name, state, localGovernment, city, address } = req.body;
    const farm = new Farm({
      name,
      state,
      localGovernment,
      city,
      address,
      user: req.user.id,
    });
    await farm.save();
    res.status(201).json(farm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.get = async (req, res) => {
  try {
    const farm = await Farm.findOne({ user: req.user.id });
    if (!farm) {
      return res.status(404).json({ message: "Farm not found" });
    }
    res.status(200).json(farm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
