import mongoose from "mongoose";
const { Model, Schema } = mongoose;

const TasksSchema = new Schema({
  task: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Task", TasksSchema);
