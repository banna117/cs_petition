var mysql = require("mysql");
const db = mysql.createPool({

  // host: "172.31.23.71",
  // user: "admin",
  // password: "dbWkd!zz117",

  host: "localhost",
  user: "root",
  password: "1234",

  port: 3306,
  database: "cs_petition",
});

module.exports = db;
