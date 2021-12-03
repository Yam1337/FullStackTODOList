import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "dotenv/config";
// IMPORT ROUTES
import tasksRouter from "./routes/tasks.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// MIDDLEWARES
app.use("/tasks", tasksRouter);

try {
  mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Mongoose is connected")
  );
} catch (e) {
  console.log("Could not connect to Mongoose");
}

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
