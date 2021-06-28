var mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "testuser",
  password: "1111",
  port: 3306,
  database: "testdb",
});

module.exports = db;
