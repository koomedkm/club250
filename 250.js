const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const connectDB = require("./database");

connectDB();

const contributionSchema = new mongoose.Schema({
  contributor: String,
  amount: String,
  date: String,
  time: String,
  paymentFor: String,
});

const Contribution = mongoose.model("Contribution", contributionSchema);

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "./views");

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/", async (req, res) => {
  const contribution = new Contribution(req.body);
  console.log(contribution);
  try {
    savedContribution = await contribution.save();
    res.status(201).redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  res.render("250");
});

const port = 3000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
