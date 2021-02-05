const express = require("express"); // express
const app = express(); // initialize express
const cors = require("cors"); // cors
const bodyParser = require("body-parser"); // body-parser
require("./db/connection"); // database connection
const routes = require("./routes/accoutsRoute"); // routes
// const Account = require("./model/account");
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(8080, () => console.log("server is online"));
