var mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12341234",
  port: 3306,
  database: "cs_petition",
});

module.exports = db;
