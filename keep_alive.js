import express from "express";

const app = express();
app.get("/", (req, res) => res.send("Bot aktif!"));

app.listen(3000, () => {
  console.log("keep_alive aktif");
});
