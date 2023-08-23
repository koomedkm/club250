const mongoose = require("mongoose");

const contributorSchema = new mongoose.Schema({
  contributor: {
    type: String,
    enum: [
      "Ernest",
      "Wakomo",
      "Karago",
      "Wechuli",
      "Munguti",
      "Sam",
      "Lukas",
      "Steve",
      "Dalton",
      "Koome",
      "Gichui",
    ],
  },
  monthlyContributions: {
    type: [Number],
    default: Array(12).fill(0),
  },
  totalYearlyAmounts: {
    type: Number,
    default: 0,
  },
  year: String,
});

const Contributor = mongoose.model("Contributor", contributorSchema);

module.exports = Contributor;
