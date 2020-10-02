const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const connection = require("./src/helpers/mysql");

connection.connect((err) => {
  if (err) throw err;
  console.log("Database connected success");
});
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1/", require("./src/routes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
