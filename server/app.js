import express from "express";

const app = express();
const PORT = 3065;

app.get("/", (req, res) => res.end("Hello, Express World!"));

app.listen(PORT, () =>
  console.log(`✅ http://localhost:${PORT} Server Ready!`)
);
