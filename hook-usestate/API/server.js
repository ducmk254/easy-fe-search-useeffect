const express = require("express");
const app = express();
const bodyPaser = require("body-parser");

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded());

app.listen(3000, () => {
  console.log("API is up on 3000 port !!!");
});
