const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;


// 🔑 Necesario para poder leer JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Conexión a la base de datos
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "Pokemon",
});

const db = connection.promise();

connection.connect((err) => {
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
  connection.query(
    "select e.id, e.nombre AS nombre_entrenador, e.tipo_especializa, p1.nombre AS nombre_poke1, p2.nombre AS nombre_poke2, p3.nombre AS nombre_poke3, p4.nombre AS nombre_poke4, p5.nombre AS nombre_poke5, p6.nombre AS nombre_poke6 FROM entrenadores e INNER JOIN pokemon p1 ON e.poke1 = p1.id INNER JOIN pokemon p2 ON e.poke2 = p2.id INNER JOIN pokemon p3 ON e.poke3 = p3.id INNER JOIN pokemon p4 ON e.poke4 = p4.id INNER JOIN pokemon p5 ON e.poke5 = p5.id INNER JOIN pokemon p6 ON e.poke6 = p6.id;",
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "Error en la consulta" });
      } else {
        res.json(results);
      }
    }
  );
});

app.get("/rankingnivel1", (req, res) => {
  connection.query(
    "SELECT usuarios.nombre as nombre_usuario ,partidas.tiempo_segundos as tiempo FROM partidas INNER JOIN usuarios ON partidas.id_usuario = usuarios.id where partidas.nivel = 1 order by partidas.tiempo_segundos ASC;",
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "Error en la consulta" });
      } else {
        res.json(results);
      }
    }
  );
});

app.get("/rankingnivel2", (req, res) => {
  connection.query(
    "SELECT usuarios.nombre as nombre_usuario ,partidas.tiempo_segundos as tiempo FROM partidas INNER JOIN usuarios ON partidas.id_usuario = usuarios.id where partidas.nivel = 2 order by partidas.tiempo_segundos ASC;",
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "Error en la consulta" });
      } else {
        res.json(results);
      }
    }
  );
});

app.get("/rankingnivel3", (req, res) => {
  connection.query(
    "SELECT usuarios.nombre as nombre_usuario ,partidas.tiempo_segundos as tiempo FROM partidas INNER JOIN usuarios ON partidas.id_usuario = usuarios.id where partidas.nivel = 3 order by partidas.tiempo_segundos ASC;",
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "Error en la consulta" });
      } else {
        res.json(results);
      }
    }
  );
});

app.get("/rankingnivel4", (req, res) => {
  connection.query(
    "SELECT usuarios.nombre as nombre_usuario ,partidas.tiempo_segundos as tiempo FROM partidas INNER JOIN usuarios ON partidas.id_usuario = usuarios.id where partidas.nivel = 4 order by partidas.tiempo_segundos ASC;",
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "Error en la consulta" });
      } else {
        res.json(results);
      }
    }
  );
});

app.get("/rankingnivel5", (req, res) => {
  connection.query(
    "SELECT usuarios.nombre as nombre_usuario ,partidas.tiempo_segundos as tiempo FROM partidas INNER JOIN usuarios ON partidas.id_usuario = usuarios.id where partidas.nivel = 5 order by partidas.tiempo_segundos ASC;",
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "Error en la consulta" });
      } else {
        res.json(results);
      }
    }
  );
});

// Iniciar sesion con los usuarios
app.get("/getUser", (req, res) => {
  const username = req.query.username;

  if (!username) {
    return res.status(400).json({ error: "Falta username" });
  }

  connection.query(
    "SELECT nombre, contrasena, nivel FROM usuarios WHERE nombre = ?",
    [username],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error en consulta" });
      }

      if (results.length === 0) {
        return res.json(null);
      }

      // Devuelve sólo el primer usuario encontrado
      res.json(results[0]);
    }
  );
});

// Registrar usuarios
app.post("/registro", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  // Esta consulta verifica si el nombre o el email ya existen
  const checkQuery = "SELECT * FROM usuarios WHERE nombre = ? OR gmail = ?";

  connection.query(checkQuery, [name, email], (err, results) => {
    if (err) {
      console.error("Error al verificar existencia:", err);
      return res.status(500).json({ error: "Error al verificar usuario" });
    }

    if (results.length > 0) {
      const existente = results[0];
      if (existente.nombre === name) {
        return res
          .status(409)
          .json({ error: "El nombre de usuario ya está registrado" });
      }
      if (existente.email === email) {
        return res.status(409).json({ error: "El correo ya está registrado" });
      }
    }

    // Si no existe, registrar al nuevo usuario
    const insertQuery =
      "INSERT INTO usuarios (id, nombre, gmail, contrasena, nivel) VALUES (null, ?, ?, ?, 0)";

    connection.query(insertQuery, [name, email, password], (err, results) => {
      if (err) {
        console.error("Error al registrar:", err);
        return res.status(500).json({ error: "Error al registrar usuario, el correo o el nombre de usuario ya existen" });
      }

      res.json({ success: true });
    });
  });
});

app.post('/guardar-partida', async (req, res) => {
  const { nivel, tiempo_segundos, usuario } = req.body;

  try {
    // Aqui voy a obtener ID del usuario a partir del nombre del usuario guardado en la sesion
    const [filas] = await db.query(
      'SELECT id FROM usuarios WHERE nombre = ? LIMIT 1',
      [usuario]
    );

    if (filas.length === 0) {
      return res.status(404).json({ exito: false, mensaje: 'Usuario no encontrado' });
    }

    const id_usuario = filas[0].id;

    // Insertar la partida
    await db.query(
      'INSERT INTO partidas (nivel, tiempo_segundos, id_usuario) VALUES (?, ?, ?)',
      [nivel, tiempo_segundos, id_usuario]
    );

    // editar la tabla usuarios para guardar el progreso del jugador
    await db.query(
      'UPDATE usuarios SET nivel = ? WHERE nombre = ?',
      [nivel, usuario]
    );

    res.json({ exito: true });

  } catch (error) {
    console.error(error);
    res.status(500).json({ exito: false, mensaje: 'Error en el servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
