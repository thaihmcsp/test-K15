const router = require("express").Router();
const path = require("path");
const TodoModel = require("../models/todoModel");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/todo.html"));
});

router.get("/all", async (req, res) => {
  try {
    const list = await TodoModel.find();
    res.json({ status: 200, mess: "ok", list });
  } catch (error) {
    res.json({ status: 500, mess: "loi server", error });
  }
});

router.post("/", async (req, res) => {
  try {
    await TodoModel.create({
      name: req.body.name,
      description: req.body.description,
      deadline: req.body.deadline,
      status: req.body.status,
    });
    const list = await TodoModel.find();
    res.render("components/listJob", { list });
  } catch (error) {
    res.json({ status: 500, mess: "loi server", error });
  }
});

module.exports = router;
