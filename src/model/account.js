const mongoose = require("mongoose");
const validator = require("validator");

const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email already exists"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error(`Invalid email`);
      }
    },
    count: {
      type: Number,
      default: 0,
    },
  },
});

const Account = new mongoose.model("Account", accountSchema);

module.exports = Account;
