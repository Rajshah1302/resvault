const mongoose = require("mongoose");
const { Schema } = mongoose;

const fileSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  hash: {
    type: String,
    required: true,
  },
  userAddress: {
    type: String,
    required: true,
  },
});

const File = mongoose.model("File", fileSchema);

module.exports = File;
