// Creamos este archivo controller para crear las funciones necesarias para las peticiones

import tasks from "../models/taskmodels.js"; 

// funcion para obtener todas las tareas
export const getTasks = async (req, res) => {
  try {
    const GetTasks = await tasks.find();

    res.json(GetTasks); 
  } catch (error) {
    console.log(error); 
  }
};

// funcion para obtener la tarea por su id
export const getTaskbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await tasks.findById(id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    } else {
      res.json(task);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({message: 'Hubo un error'})
  }
};

// funcion para crear tareas
export const createTasks = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;

    if (!nombre || !descripcion) {
      return res
        .status(400)
        .json({ message: "todos los campos son necesarios" });
    }

    const NewTask = new tasks({
      nombre,
      descripcion,
    });

    const Task = await NewTask.save();

    res.json(Task);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "hubo un error" });
  }
};

// funcion para eliminar tareas
export const deleteTask = async (req, res) => {
  const Task = await tasks.findByIdAndDelete(req.params.id);

  if (!Task) return res.status(404).json({ message: "producto no encontrado" });

  return res.sendStatus(204);
};

// funcion para editar o actualizar tareas
export const updateTask = async (req, res) => {
  try {
    const Task = await tasks.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!Task)
      return res.status(404).json({ message: "producto no encontrado" });
    res.json(Task);
  } catch (error) {
    console.log(error);
  }
};
