const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

let posts = [];

app.post("/add", (req, res) => {
  const { text } = req.body;
  posts.push(text);
  res.send("追加成功");
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
