const mongoose = require("mongoose");

require("dotenv").config();

const databaseLink = process.env.DB_URL

const connectDB = async () => {
  try {
    const db = await mongoose.connect(databaseLink, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected: ${db.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;