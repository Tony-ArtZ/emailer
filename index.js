import express from "express";
import { sendEmail } from "./emailer.js";
import "dotenv/config";

const app = express();

app.use(express.json());
const port = process.env.PORT || 5000;

app.get("/ping", (req, res) => {
  res.send("pong!");
});
app.post("/", async (req, res) => {
  try {
    const body = req.body;
    await sendEmail(body);
    res.json({ message: "success" });
  } catch (err) {
    res.json({ error: err });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
