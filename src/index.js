const express = require("express");
const app = express();
require("./db/connection");
const Account = require("./model/account");
app.listen(8080, () => console.log("server is online"));
