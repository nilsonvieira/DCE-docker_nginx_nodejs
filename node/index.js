const express = require("express");
const app = express();
const port = 3000;
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "ce-mysql",
  user: "root",
  password: "root",
  database: "nodedb",
});
const sqltable = "CREATE TABLE  people (name varchar(255))";
con.query(sqltable);
const sqlvalues = `INSERT INTO people(name) values('Nilson')`;
con.query(sqlvalues);
con.end();

app.get("/", (req, res) => {
  res.send("<h1>Full Cycle Rocks</h1>");
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
