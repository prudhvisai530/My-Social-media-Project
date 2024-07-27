const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  res.send("Welcom user");
});

//Update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        res.status(500).json(error);
      }
    }
  } else {
    res.status(400).send("You can update only your profile");
  }
  try {
    const response = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).send("Account is updated");
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  if (req.params.id === req.body.userId || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).send("Account deleted successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(400).send("You can delete only your profile");
  }
});

//get user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
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
        res.status(200).json("User has been followed");
      } else {
        res.status(403).send("you are already following this account");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).send("You can't follow your account");
  }
});

module.exports = router;
