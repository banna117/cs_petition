const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors:{
    origin:"http://localhost:3000",
    credentials:true
  }
})
const db = require("./config/db");


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
//getting petitions size from DB
app.get("/petitions/size", (req, res) => {
  db.query("SELECT COUNT(*) as size FROM petitions", (err, data) => {
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
// getting category from DB
app.get("/category", (req, res) => {
  db.query("SELECT * FROM categories", (err, data) => {
    if (!err) res.send(data);
    else res.send(err);
  });
});

io.on('connection', (socket)=>{
  console.log("접속함")
  console.log("22")
  
  socket.on("newPost", (addingPost)=>{
    console.log("on add post")
    io.emit("addPost", addingPost);
    const testQuery = "INSERT INTO petitions VALUES ("+addingPost.pid+","+addingPost.uid+",\'" + addingPost.title + "\',\'" + addingPost.catId + "\',\'" + addingPost.description + "\',DATE_FORMAT(NOW(),'%Y.%m.%d'),0)"
    console.log(testQuery);
    db.query(testQuery);
  })
  socket.on("newComment", (addingComment)=>{
    io.emit("addComment", addingComment);
    console.log(addingComment);
    const testQuery = "INSERT INTO comments VALUES ("+addingComment.pid+","+addingComment.comId+"," + addingComment.uid + ",\'" + addingComment.content + "\',DATE_FORMAT(NOW(),'%Y.%m.%d'))"
    db.query(testQuery);
    console.log(testQuery);
  })
})

server.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
