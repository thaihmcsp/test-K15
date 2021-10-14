const mongoose = require("./connectDB");

const UserSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    fullname: String,
  },
  { collection: "user" }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
