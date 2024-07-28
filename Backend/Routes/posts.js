const router = require("express").Router();
const Post = require("../models/postsModel");
const User = require("../models/userModel");

router.get("/", async (req, res) => {
  res.json("posts route");
});

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: "Post is not available" });
    }
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json({ message: "Post is updated" });
    } else {
      res.status(403).json({ message: "you can update only your post" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: "Post is not available" });
    }
    if (post.userId === req.body.userId) {
      await post.deleteOne({ $set: req.body });
      res.status(200).json({ message: "Post is deleted" });
    } else {
      res.status(403).json({ message: "you can delete only your post" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.Likes.includes(req.body.userId)) {
      await post.updateOne({
        $push: {
          Likes: req.body.userId,
        },
      });
      res.status(200).json({ message: "You have liked this  post" });
    } else {
      await post.updateOne({
        $pull: {
          Likes: req.body.userId,
        },
      });
      res.status(200).json({ message: "you have disliked the post" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

router.get("/timeline", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const post = await Post.find({ userId: currentUser._id });
    const friendsPost = await Promise.all(
      currentUser.following.map((friendId) => Post.find({ userId: friendId }))
    );
    res.status(200).json(post.concat(...friendsPost));
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

module.exports = router;
