import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";
let app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static("public"));
app.use(
  "/jquery",
  express.static(path.join(__dirname, "node_modules", "jquery", "dist"))
);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/songs", function (req, res) {
  fs.readFile(
    path.join(__dirname, "songs.json"),
    "utf-8",
    function (err, songs) {
      if (err) throw err;
      res.json(JSON.parse(songs));
    }
  );
});

app.listen(3000, function () {
  console.log("Runing app...");
});
