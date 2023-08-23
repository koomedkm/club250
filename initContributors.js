const mongoose = require("mongoose");
const Contributor = require("./models/Contributor");
const connectDB = require("./database");

connectDB();

const contributors = [
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
];

async function initContributors() {
  for (const contributor of contributors) {
    try {
      const existingContributor = await Contributor.findOne({ contributor });
      if (!existingContributor) {
        const newContributor = new Contributor({ contributor });
        await newContributor.save();
        console.log(`Initialized ${contributor}`);
      }
    } catch (error) {
      console.error(`Error initializing ${contributor}: ${error}`);
    }
  }

  console.log("Initialization completed");
  mongoose.connection.close();
}

initContributors();
