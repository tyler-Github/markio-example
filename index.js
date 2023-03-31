const express = require("express");
const markio = require("markio");
const path = require('path');

const app = express();

app.use(markio.markioMiddleware);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.locals.data = "# Hello, world!";
  const renderedMarkdown = markio.renderMarkdown(res.locals.data);
  res.render("index", { renderedMarkdown });
});

app.get("/file", (req, res) => {
  res.locals.data = { filename: "example.md" };
  fs.readFile(res.locals.data.filename, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error reading file");
    }
    const renderedMarkdown = markio.renderMarkdown(data);
    res.render("index", { renderedMarkdown });
  });
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
