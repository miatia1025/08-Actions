import express from "express";

const app = express();

const port = 5000;

app.listen(port, () => {
  console.log("Server up");
});

app.get("/", (req, res) => {
  console.log("Send Get Request");

  res.send("Responce Received");
});
