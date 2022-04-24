const mongoose = require("mongoose");

const FairSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    address: { type: String, required: true },
    fee: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Fair", FairSchema);
