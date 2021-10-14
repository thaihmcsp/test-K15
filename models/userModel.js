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

UserModel.create({
  username: "thai",
  password: "123",
  fullname: "Thai Hoang",
})
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });
