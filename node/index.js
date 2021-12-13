const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "ce-mysql",
  user: "root",
  password: "root"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE nodedb", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "create table  people (name varchar(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });

const sql = `INSERT INTO people(name) values('Nilson')`
con.query(sql)
con.end()

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks</h1>')
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})