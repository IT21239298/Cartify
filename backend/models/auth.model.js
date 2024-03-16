//authmodel
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ROLES = {
  ADMIN: "Admin",
  USER: "User",
  SUPERADMIN: "Superadmin",
};

// Define User schema
const UserModel = new Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
    confirmPassword: String,
    image: String,
    roles: {
      type: [String],
      enum: Object.values(ROLES),
      default: [ROLES.USER],
    },
  },
  { timestamps: true }
);

// Create Mongoose schema

const User = mongoose.model("user", UserModel);

exports.default = User;

module.exports = {
  User,
};
