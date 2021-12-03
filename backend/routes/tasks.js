import express from "express";

const router = express.Router();
import Task from "../models/Task.js";

// TASKS/GET
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

// TASKS/POST
router.post("/", async (req, res) => {
  console.log(req.body);
  const post = new Task({
    task: req.body.task,
  });
  try {
    const savedTask = await post.save();
    res.json(savedTask);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

// TASKS/GET (SPECIFIC POST)
router.get("/:postId", async (req, res) => {
  try {
    const task = await Task.findById(req.params.postId);
    res.json(task);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

// TASKS/DELETE (SPECIFIC POST)
router.delete("/:postId", async (req, res) => {
  try {
    const removedTask = await Task.deleteOne({ _id: req.params.postId });
    res.json(removedTask);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

//TASKS/PATCH (SPECIFIC POST)
router.patch("/:postId", async (req, res) => {
  try {
    const updatedTask = await Task.updateOne(
      { _id: req.params.postId },
      {
        $set: { task: req.body.task },
      }
    );
    res.json(updatedTask);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

export default router;
