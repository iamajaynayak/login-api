const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/account")
  .then(() => {
    console.log("database is online");
  })
  .catch((err) => console.log(err));
