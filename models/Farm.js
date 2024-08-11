const mongoose = require("mongoose");

const FarmSchema = new mongoose.Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  localGovernment: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Farm", FarmSchema);
