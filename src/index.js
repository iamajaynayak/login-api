const express = require("express");
const app = express();
require("./db/connection");
const routes = require("./routes/accoutsRoute");
// const Account = require("./model/account");

app.use(routes);
app.listen(8080, () => console.log("server is online"));
