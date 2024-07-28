const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  res.json("Welcom user");
});

//Update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        res
          .status(500)
          .json({ message: "Internal Server Error", error: error.message });
      }
    }
  } else {
    res.status(400).json({ message: "You can update only your profile" });
  }
  try {
    const response = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json({ message: "Account is updated" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  if (req.params.id === req.body.userId || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Account deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  } else {
    res.status(400).json({ message: "You can delete only your profile" });
  }
});

//get user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

//follow user
router.put("/:id/follow", async (req, res) => {
  if (req.params.id !== req.body.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.id);
      if (!user.follower.includes(req.body.id)) {
        await user.updateOne({ $push: { follower: req.body.id } });
        await currentUser.updateOne({ $push: { following: req.params.id } });
        res.status(200).json({ message: "User has been followed" });
      } else {
        res
          .status(403)
          .json({ message: "you are already following this account" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  } else {
    res.status(403).json({ meesage: "You can't follow your account" });
  }
});

//unfollow user
router.put("/:id/unfollow", async (req, res) => {
  if (req.params.id !== req.body.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.id);
      if (user.follower.includes(req.body.id)) {
        await user.updateOne({ $pull: { follower: req.body.id } });
        await currentUser.updateOne({ $pull: { following: req.params.id } });
        res.status(200).json({ message: "User has been unfollowed" });
      } else {
        res.status(403).json({ message: "you don't follow this user" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  } else {
    res.status(403).json({ message: "You can't unfollow your account" });
  }
});

module.exports = router;
