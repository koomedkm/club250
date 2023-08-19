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
  const contributor = req.body.contributor;
  const amount = req.body.amount;
  const reason = req.body.paymentFor;
  console.log(reason);
  console.log(contribution);
  try {
    savedContribution = await contribution.save();
    console.log(`The saved contribution is ${savedContribution}`);
    res
      .status(201)
      .redirect(`/contributions?contributor=${contributor}&amount=${amount}&reason=${reason}`);
  } catch (error) {
    console.log(error);
  }
});

app.get("/contributions", (req, res) => {
  const contributor = req.query.contributor;
  const amount = req.query.amount;
  const reason = req.query.reason;
  console.log(contributor, amount, reason);
  res.render("contributions", { contributor, amount, reason });
});

app.get("/", (req, res) => {
  res.render("250");
});

const port = 3000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
