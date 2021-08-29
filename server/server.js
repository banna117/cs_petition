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
const resolve = require("resolve");
const { title } = require("process");


// const bodyParser = require('body-parser');

// app.use(bodyParser().urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

//data for DB
var petitionSize = 0;
var commentSizes = [];
var userSize = 0;

//comment size per pid
app.get("/commentsize", (req, res) => {
  db.query("SELECT pid, COUNT(comId) as comsize FROM comments GROUP BY pid", (err, data) => {
    console.log(data)
    commentSizes = data;
    if (!err) res.send(data);
    else res.send(err);
  });
});

//getting petitions from DB
app.get("/petitions", (req, res) => {
  db.query("SELECT * FROM petitions", (err, data) => {
    petitionSize=data.length;
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
//getting agrrements from DB
app.get("/agreements", (req, res) => {
  db.query("SELECT * FROM agree", (err, data) => {
    if(!err) res.send(data);
    else res.send(data);
  })
})

//upload users from DB
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, data) => {
    userSize = data.length;
    if(!err) res.send(data);
    else res.send(data);
  })
})

io.on('connection', (socket)=>{
  console.log("접속함")
  //petition 새로 받았을 때, 
  socket.on("newPost", (addingPost)=>{
    //클라이언트로 그 정보를 그대로 보내준다. { uid, title, catId, description, date, state };
    io.emit("addPost", {pid:petitionSize, uid: addingPost.uid, title:addingPost.title, catId:addingPost.catId, description: addingPost.description, date: addingPost.date, state: addingPost.state});
    const testQuery = "INSERT INTO petitions VALUES ("+petitionSize+","+addingPost.uid+",\'" + addingPost.title + "\',\'" + addingPost.catId + "\',\'" + addingPost.description + "\',DATE_FORMAT(NOW(),'%Y.%m.%d'),0)"
  
    db.query(testQuery);
    petitionSize+=1;
  })
  //comment 새로 달렸을 때,
  socket.on("newComment", (addingComment)=>{
    //클라이언트로 그 정보를 그대로 보내준다.
    io.emit("addComment", addingComment);
    console.log(addingComment);
    const testQuery = "INSERT INTO comments VALUES ("+addingComment.pid+","+addingComment.comId+"," + addingComment.uid + ",\'" + addingComment.content + "\',DATE_FORMAT(NOW(),'%Y.%m.%d'))"
    db.query(testQuery);
  
  })
  socket.on("newAgree", (addingAgree)=>{
    io.emit("addAgree", addingAgree);
    const testQuery = "INSERT INTO agree VALUES ("+addingAgree.pid+","+addingAgree.uid+")";
    db.query(testQuery);
  
  })
  //새로 로그인할 때, name 과 major 정보를 저장하고 이를 다시 클라이언트로 보낸다. addingUser {name, major}
  socket.on("newLogin", (name, major)=>{
    io.emit("addUser", {uid:userSize, name, major});
    const testQuery = "INSERT INTO users VALUES ("+userSize+",\'"+name+"\',\'"+major+"\')";
    db.query(testQuery);
    console.log(testQuery);

    userSize += 1;
  })
})

server.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
