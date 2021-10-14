const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://thaidd7b:thaidd7b@cluster0.jqh8p.mongodb.net/K15?retryWrites=true&w=majority"
);

module.exports = mongoose;
