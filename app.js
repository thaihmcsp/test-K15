const express = require("express");
const path = require("path");
const app = express();
const TodoRouter = require("./router/TodoRouter");
const TodoModel = require("./models/todoModel");
require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "./public")));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const list = await TodoModel.find();
    let data = { username: "thai", fullname: "Thai Hoang" };

    res.render("home", { username: data.username, list });
  } catch (error) {
    res.json({ status: 500, mess: "loi" });
  }
});

app.use("/todo", TodoRouter);

app.listen(process.env.PORT || 5000);
