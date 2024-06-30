// auth.js
const express = require("express");
const router = express.Router();
const User = require("../models/userModel"); // Adjust the path as necessary

// Register
router.post("/register", async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    // Create a new user instance
    const newUser = new User({
      userName,
      email,
      password,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Send response
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
