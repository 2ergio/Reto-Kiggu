// importamos las librerias necesarias para nuestro proyecto
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

const App = () => {
  const [Id, setId] = useState(false)
  const [estado, setestado] = useState(false)
  const [show, setShow] = useState(false);
  const [showA, setShowA] = useState(false);
  const [Task, settasks] = useState([]);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm(); // traemos de react-hok-form
 
 // console.log(Task)

 // funcion para cerrar la modal de agregar productos
  const handleClose = () => {
    clearErrors()
    setValue("nombre", "");
    setValue("descripcion", "");
    setShow(false);
  };

  // funcion para cerrar la modal de editar productos
  const handleCloseA = () => {
    clearErrors()
    setValue("nombre", "");
    setValue("descripcion", "");
    setShowA(false);
    setestado("");
    setId("");

  }

  // funcion para activar la modal de agregar productos
  const handleShow = () => setShow(true);

  // funcion para actualizar los estados
  const estadosActualizar = async() =>{
    let newState;
    if (estado === "Por Hacer") {
      newState = "En Curso";
    } else if (estado === "En Curso") {
      newState = "Completado";
    }
    try {
      // Enviamos la actualización al servidor
      const res = await axios.put(`http://localhost:3000/api/tasks/${Id}`, { estado: newState });
      //console.log(res);
      setestado(newState);  // Actualizamos el estado localmente
      
    } catch (error) {
      console.log(error);
      alert("Error al actualizar estado");
    }
    // Actualizamos el estado local de las tareas 
    const updatedTasks = Task.map((task) => {
      if (task._id === Id) {
        return { ...task, estado: newState }; // Modificamos el estado de la tarea específica
      }
      return task; // Las demás tareas no cambian
    });

    // Actualizamos el estado de las tareas
    settasks(updatedTasks);
  }

  // funcion para abrir la modal de editar tareas
  const actualizar = (task) =>{
    clearErrors() 
    setShowA(true)
    const estado = task.estado;
    const id = task._id;
    setId(id)
    setestado(estado)
    setValue('nombre', task.nombre); 
    setValue('descripcion', task.descripcion);

    
  }
  //console.log(Id)

  //funcion para actualizar
  const onSubmitA = handleSubmit(async (task) => {
    try {
      await axios
        .put(`http://localhost:3000/api/tasks/${Id}`,task)
        .then((res) => {
          //console.log(res);
          
          //console.log(task)
        });

        // Actualizamos el estado local con la tarea modificada
    const updatedTasks = Task.map((t) => {
      if (t._id === Id) {
        return {
          ...t,    // Copia todas las propiedades de la tarea original
          ...task  // Sobrescribe las propiedades con los nuevos valores de la tarea
        };
      }
      return t;  // Si no es la tarea que estamos actualizando, la dejamos igual
    });

    // Actualizamos el estado de las tareas con el array actualizado
    settasks(updatedTasks);

      handleCloseA();
    } catch (error) {
      console.log(error);
      alert("Error");
      handleCloseA();
    }
  });
  

  // Funcion para agregar Tareas
  const onSubmit = handleSubmit(async (task) => {
    try {
      await axios
        .post("http://localhost:3000/api/tasks", task)
        .then((res) => {
          //console.log(res);
          settasks((prevTasks) => [...prevTasks, res.data]);
        });
      handleClose();
    } catch (error) {
      console.log(error);
      alert("Error");
      handleClose();
    }
  });

  // funcion para eliminar tareas
  const deleteTask = (async (id) =>{
    try{
     //console.log(id)
      const res = await axios.delete(`http://localhost:3000/api/tasks/${id}`)
      //console.log(res)
      console.log('tarea eliminada')
      settasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      

    }catch(error){
      console.log(error)
    }
  })
  
  
  useEffect(() => {
    // funcion para obtener las tareas
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/tasks");
        //console.log(res.data);
        settasks(res.data); // Actualizar el estado con las tareas obtenidas
      } catch (error) {
        console.log("Error al obtener tareas:", error);
      }
    };

    fetchTasks();
  },[]);

  return (
    <div>
      {/*Modal para agregar tareas */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-warning" closeButton>
          <Modal.Title>Agregar Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" className="text-center">
            <label htmlFor="">
              <h5>Ingrese el nombre de la tarea</h5>
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-control border border-black"
              maxLength={50}
              {...register("nombre", { required: true })}
            />
            {errors.nombre && (
              <p className="text-danger">Este Campo es requerido</p>
            )}{" "}
            <br /> <br />
            <label htmlFor="">
              <h5>Ingrese la descripción de la tarea</h5>
            </label>
            <input
              type="text"
              className="form-control border border-black"
              maxLength={200}
              {...register("descripcion", { required: true })}
            />
            {errors.descripcion && (
              <p className="text-danger">Este Campo es requerido</p>
            )}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
      <br />

      {/*Modal para actualizar*/}
      <Modal show={showA} onHide={handleCloseA}>
        <Modal.Header className="bg-warning" closeButton>
          <Modal.Title>Editar Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" className="text-center">
            <label htmlFor="">
              <h5>Ingrese el nombre de la tarea</h5>
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-control border border-black"
              maxLength={50}
              {...register("nombre", { required: true })}
            />
            {errors.nombre && (
              <p className="text-danger">Este Campo es requerido</p>
            )}{" "}
            <br /> <br />
            <label htmlFor="">
              <h5>Ingrese la descripción de la tarea</h5>
            </label>
            <input
              type="text"
              className="form-control border border-black"
              maxLength={200}
              {...register("descripcion", { required: true })}
            />
            {errors.descripcion && (
              <p className="text-danger">Este Campo es requerido</p>
            )}
            <br />

            <h5>Estado de la tarea:</h5>
            <h5>{estado}</h5>
          </form>
        </Modal.Body>
        <Modal.Footer>
        {estado === 'Por Hacer' ? (
          <Button className="btn-secondary" onClick={estadosActualizar}> Cambiar estado a en curso</Button>
        ): estado === 'En Curso' ? (
          <Button  className="btn-primary" onClick={estadosActualizar}> Cambiar estado a Completado</Button>
        ) : (
          <button disabled className="btn btn-success">Completado</button>
        )}
          <Button variant="secondary" onClick={handleCloseA}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={onSubmitA}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        className="container border-bottom border-warning bg-warning-subtle "
        style={{ minHeight: "80px" }}
      >
        <div className="container d-flex justify-content-start gap-3  ">
          <h3 className=" my-4">Agregar Tarea</h3>

          <button
            className="btn  btn-warning fs-4 text-center  my-3 btn-hover "
            onClick={handleShow}
          >
            <i class="bi bi-plus fs-4 my-auto"> </i>
          </button>
        </div>
        
      </div><br />
      <div className="container d-flex gap-3 justify-content-center" style={{flexWrap: 'wrap'}}>
      {Task.length === 0 ? (
          <p>No hay tareas disponibles</p>
        ) : (
          Task.map((task) => (
            <Card className="border-bottom border-warning" style={{ width: "22rem" }} key={task._id} >
              <Card.Body >
                <div className="text-end">
                  <i
                    className="bi bi-x fs-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteTask(task._id)} // Llamada para eliminar la tarea
                  ></i>
                </div>
                <Card.Title>{task.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {task.estado === 'Por Hacer' ? (
                  <p className="text-secondary">{task.estado}</p>

                ): task.estado === 'En Curso' ? (
                  <p className="text-primary">{task.estado}</p>
                ) :(
                  <p className="text-success">{task.estado}</p>
                )
                }</Card.Subtitle>
                <Card.Text>{task.descripcion}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">{task.createdAt.slice(0, 10)}</Card.Subtitle>
                <Button className="btn-warning " onClick={() =>{
              actualizar(task)
            }}>Editar</Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div> <br /> <br />
    </div>
  );
};
export default App;
