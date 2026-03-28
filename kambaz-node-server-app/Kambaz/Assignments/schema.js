import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
  _id: String,
  title: String,
  course: String,
  available: String,
  until: String,
  due: String,
  points: Number,
  description: String
}, { collection: "assignments" });
export default assignmentSchema;
