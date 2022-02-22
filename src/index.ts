require("dotenv").config();

const express = require("express");
const http = require("http");
const app = express();

const PORT = 3000;

http.createServer(app).listen(PORT, (err: any) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server is listening on ${PORT}`);
});

app.get("/", (req: any, res: any) => {
  res.json({
    _v: 1,
    status: "alive",
  });
});

const youtubeRouter = require("./routes/YoutubeRoute");
app.use("/youtube", youtubeRouter);
