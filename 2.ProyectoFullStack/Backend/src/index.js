// centro de la aplicacion, donde se configuran los servicios y iniciamos la aplicacion

import express from "express";

import cors from "cors"; 

import morgan from "morgan";

import { Connect } from "./db.js"; 

import tasksRoute from "./routes/tasksRoutes.js"; 

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
); 

app.use(morgan("dev")); 



app.use(express.json()); 

app.use(tasksRoute);

Connect();

app.listen(3000); 
console.log("Server en", 3000);