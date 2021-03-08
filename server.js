require("./connection");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const noteRoute = require("./routes/noteRoute");
const todoRoute = require("./routes/todoRoute");
app.use("/notes", noteRoute);
app.use("/todos", todoRoute);

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to ProArik's Projects 2021" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
