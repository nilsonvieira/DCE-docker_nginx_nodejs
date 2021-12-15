const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "ce-mysql",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");
const con = mysql.createConnection(config);

app.get("/", (req, res) => {
  con.query(`CREATE TABLE  people (name varchar(255))`);
  con.query(`INSERT INTO people (name) VALUES ('Nilson')`);
  con.query(`SELECT name FROM people`, (error, results, fields) => {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${
          !!results.length
            ? results.map((el) => `O Nome é: ${el.name}`).join("")
            : ""
        }
      </ol>
    `);
  });
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
