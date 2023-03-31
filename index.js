const express = require("express");
const markio = require("markio");

const app = express();

app.use(markio.markioMiddleware);

app.get("/", (req, res) => {
  res.locals.data = "# Hello, world!";
  res.render("index");
});

app.get("/file", (req, res) => {
  res.locals.data = { filename: "example.md" };
  res.render("index");
});
