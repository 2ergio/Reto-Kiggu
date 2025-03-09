let app;

// codigo defectuoso:
app.get("/tasks/:id", (req, res) => {
  const { id } = req.body; // debe ser req.params, req.params es una forma en Express.js de acceder a los valores dinámicos que aparecen en las rutas de la URL
  const task = tasks.find((t) => t.id == id);
  if (!task) {
    res.status(200).json({ error: "Task not found" }); // Res.status deberia ser 404, === no encontrado
  } else {
    res.send(task); // falta res.json() si queremos enviar un JSON con la tarea
  }
});

// codigo arreglado:
const tasks = [
  {
    id: 1,
    nombre: "Hacer el arroz",
    descripcion: "montar el arroz a las 9am el domingo",
    status: "Por Hacer",
  },
  {
    id: 2,
    nombre: "Entregar el reto Kiggu",
    descripcion: "Mandar el reto kiggu por medio del correo electronico",
    status: "En Curso",
  },
];
app.get("/tasks/:id", (req, res) => {
  try {
    const { id } = req.params;
    const task = tasks.find((t) => t.id == id);

    if (!task) {
      res.status(404).json({ error: "Task not found" });
    } else {
      res.json(task);
    }
  } catch (error) {
    console.log(error);
  }
});
