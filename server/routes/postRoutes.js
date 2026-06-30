const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Create Post
router.post("/", async (req, res) => {
  try {
    const post = new Post(req.body);
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get All Posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update Post
router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});


// Like Post
router.put("/like/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    post.likes += 1;

    await post.save();

    res.json(post);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// Delete Post
router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);

    res.json({
      message: "Post Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;