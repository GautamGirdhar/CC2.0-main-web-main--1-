const Registration = require("../models/Registration");

const registerTeam = async (req, res) => {
  try {
    const newRegistration = new Registration(req.body);
    const savedRegistration = await newRegistration.save();
    res.status(201).json(savedRegistration);
  } catch (error) {
    console.error("Error registering team:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { registerTeam };
