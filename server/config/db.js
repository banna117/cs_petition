var mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  port: 3306,
  database: "cs_petition",
});

module.exports = db;
