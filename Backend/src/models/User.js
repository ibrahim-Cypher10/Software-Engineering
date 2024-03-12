import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "name is required."],
    unique: [true, "this username is already taken."]
  },
  email: {
    type: String,
    required: [true, "email is required."],
  },
  password: {
    type: String,
    required: [true, "password is required."],
  },
  user_type: {
    type: String,
    required: true,
    enum: ["Customer", "Manager", "Vendor"],
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
});

const User = new mongoose.model("User", UserSchema);

export default User;
