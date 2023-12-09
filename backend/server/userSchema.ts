import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number,
  eMail: String,
});

export default mongoose.model("User", userSchema);
