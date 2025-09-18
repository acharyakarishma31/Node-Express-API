import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  _id: { type: String, required: true }, // use UUID as the _id
  firstName: String,
  lastName: String,
  age: Number,
  email: String,
});

// No need for `id`, Mongo will use `_id` (your UUID)
const User = mongoose.model("User", userSchema);

export default User;
