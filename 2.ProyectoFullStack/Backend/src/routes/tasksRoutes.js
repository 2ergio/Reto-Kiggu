// archivo para el manejo de las rutas o endpoints, direcciones a las que hacemos las peticiones

import { Router } from "express"; 

import { getTasks, createTasks, deleteTask, updateTask,getTaskbyId } from "../controllers/taskControllers.js"; //



const router = Router()

// al hacer cualquier a peticion a cualquiera de estas rutas, pasa por la funcion especifica que esta en 
// el archivo controllers
router.get('/api/tasks', getTasks) 

router.get('/api/task/:id',getTaskbyId)

router.post('/api/tasks',createTasks) 

router.delete('/api/tasks/:id',deleteTask)

router.put('/api/tasks/:id',updateTask)



export default router