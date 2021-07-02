const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./config/db");

const cors = require('cors');
// const bodyParser = require('body-parser');

// app.use(bodyParser().urlencoded({extended: true}));
app.use(cors());
app.use(express.json());


//getting petitions from DB
app.get("/petitions", (req, res) => {
  db.query("SELECT * FROM petitions", (err, data) => {
    if (!err) res.send(data);
    else res.send(err);
  });
});

//getting comments from DB
app.get("/comments", (req, res) => {
  db.query("SELECT * FROM comments", (err, data) => {
    if (!err) res.send(data);
    else res.send(err);
  });
});



app.post("/test", (req, res) => {
  // res.send(req.body);
  console.log(req.body);
  const testQuery = "INSERT INTO petitions VALUES (14, 4,\'" + req.body.latestPost.title + "\',\'" + req.body.latestPost.category + "\',\'" + req.body.latestPost.content + "\',DATE_FORMAT(NOW(),'%Y.%m.%d'),0)"
  console.log(testQuery);
  db.query(testQuery, (err, data) => {
    if (!err) res.send(data);
    else res.send(err);
    
  }

  );
});




app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
