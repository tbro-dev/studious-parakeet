/* eslint-disable linebreak-style */
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "./www")));

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "./www/index.html"));
});

app.get("/speakers", (request, response) => {
  response.sendFile(path.join(__dirname, "./www/speakers.html"));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`app is listening at port: ${port}`);
});
