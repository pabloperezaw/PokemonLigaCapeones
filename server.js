const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

// Conexión a la base de datos
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "Pokemon"
});

connection.connect(err => {
  if (err) {
    console.error("Error conectando a MySQL:", err);
    return;
  }
  console.log("Conectado a MySQL");
});

// Ruta para obtener los Pokémon
app.get("/pokemones", (req, res) => {
  connection.query("SELECT * FROM pokemon", (error, results) => {
    if (error) {
      res.status(500).json({ error: "Error en la consulta" });
    } else {
      res.json(results);
    }
  });
});

app.get("/movimientos", (req, res) => {
  connection.query("SELECT * FROM movimientos", (error, results) => {
    if (error) {
      res.status(500).json({ error: "Error en la consulta" });
    } else {
      res.json(results);
    }
  });
});

app.get("/entrenadores", (req, res) => {
  connection.query("select e.id, e.nombre AS nombre_entrenador, e.tipo_especializa, p1.nombre AS nombre_poke1, p2.nombre AS nombre_poke2, p3.nombre AS nombre_poke3, p4.nombre AS nombre_poke4, p5.nombre AS nombre_poke5, p6.nombre AS nombre_poke6 FROM entrenadores e INNER JOIN pokemon p1 ON e.poke1 = p1.id INNER JOIN pokemon p2 ON e.poke2 = p2.id INNER JOIN pokemon p3 ON e.poke3 = p3.id INNER JOIN pokemon p4 ON e.poke4 = p4.id INNER JOIN pokemon p5 ON e.poke5 = p5.id INNER JOIN pokemon p6 ON e.poke6 = p6.id;", (error, results) => {
    if (error) {
      res.status(500).json({ error: "Error en la consulta" });
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
