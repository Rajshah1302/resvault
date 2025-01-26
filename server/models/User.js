const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
