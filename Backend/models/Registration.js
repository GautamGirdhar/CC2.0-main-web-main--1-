const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  hackathonExperience: { type: String, required: true },
  teamSize: { type: Number, required: true, min: 2, max: 4 },
  participantNames: { type: String, required: true },
  contactNumber: { type: String, required: true },
  college: { type: String, required: true },
  program: { type: String, required: true },

});

module.exports = mongoose.model("Registration", TeamSchema);
