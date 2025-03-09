// conexion a la base de datos mongodb
import mongoose from "mongoose"; 

import "dotenv/config"; 

const database = process.env.DATABASE; 

export const Connect = async () => {
  
  try {
    await mongoose.connect(database);
    console.log("base de datos conectada");
  } catch (error) {
    console.log(error);
  }
};