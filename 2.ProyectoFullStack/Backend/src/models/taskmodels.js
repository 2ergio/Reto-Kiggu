// creamos este archivo models para definir las propiedades de los elementos
import mongoose from "mongoose"; 


const TaskSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    estado: {
      type: String,
      default: "Por Hacer",
    },
    
  },
  {
    timestamps: true,
    
  }
);

export default mongoose.model("tasks", TaskSchema); 
