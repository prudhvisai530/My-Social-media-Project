// auth.js
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const createError = require("http-errors");

// Register
router.post("/register", async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      throw createError(400, "Missing required fields");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Send response
    res.status(200).json(savedUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw createError(400, "Missing required params");
    }
    const validuser = await User.findOne({ email });
    if (!validuser) {
      res.status(404).send("user not found");
    }
    const validPassword = await bcrypt.compare(password, validuser.password);
    if (!validPassword) {
      throw createError(400, "Wrong password");
    }
    res.status(200).json(validuser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

module.exports = router;
