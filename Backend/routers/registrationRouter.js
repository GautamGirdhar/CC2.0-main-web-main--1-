const express = require("express");
const Team = require("../models/Registration"); // Import Mongoose model
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    console.log("Incoming Request:", req.body); // ✅ Log request data for debugging

    const {
      teamName,
      hackathonExperience,
      teamSize,
      participantNames,
      contactNumber,
      teamLeaderEmail,
      college,
      program,
    } = req.body;

    // ✅ Validate required fields
    if (!teamName || !teamLeaderEmail || !contactNumber) {
      console.error("Validation Error: Missing required fields");
      return res.status(400).json({ message: "Missing required fields" });
    }

    // ✅ Check if team leader is already registered
    const existingTeam = await Team.findOne({ teamLeaderEmail });
    if (existingTeam) {
      console.error("Validation Error: Team Leader already registered!");
      return res
        .status(400)
        .json({ message: "Team Leader already registered!" });
    }

    // ✅ Save to database
    const team = new Team({
      teamName,
      hackathonExperience,
      teamSize,
      participantNames,
      contactNumber,
      teamLeaderEmail,
      college,
      program,
    });

    await team.save();
    console.log("Team Registered Successfully!");
    res.status(201).json({ message: "Team Registered Successfully!" });
  } catch (error) {
    console.error("❌ Server Error in /register API:", error.stack);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});
router.get("/", (req, res, next) => {
  res.status(200).json({
    name: "23456",
    "reg No": "y5dr7564e65r6ugih",
  });
});

module.exports = router;
