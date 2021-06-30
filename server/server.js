const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./config/db");

const cors = require("cors");
const bodyParser = require("body-parser");


app.get("/petitions", (req, res) => {
  db.query("SELECT * FROM petitions", (err, data) => {
    if (!err) res.send(data);
    else res.send(err);
  });
});

app.get("/test", (req, res) => {
  res.send("잘 돌아가고 있느냐");
})



app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
