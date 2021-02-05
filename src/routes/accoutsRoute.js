const express = require("express");

const accoutRoute = express.Router();

const Account = require("../model/account");

//------------Sign up-----------//

accoutRoute.post("/signup", async (req, res) => {
  try {
    const accountData = await new Account(req.body);
    const createAccount = await accountData.save();
    res.status(201).json("account successfully created");
  } catch (err) {
    res.status(500).json("error creating account");
  }
});

module.exports = accoutRoute;
