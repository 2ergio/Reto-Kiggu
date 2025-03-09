# Prueba Kiggu

## Retos Kiggu
## 1. Reto, Ejercicios de Lógica de programación
## 2. Aplicación FullStack
## 3. Debugging

# Tecnologías
### Javascript || Nodejs || React || MongoDB 



# Paquetes utilizados 

# Proyecto FullStack

## Funcionalidades
## CRUD : Ver Tareas, Agregar Tareas, Editar Tareas, Eliminar Tareas.


## Backend
-express

-mongoose

-dotenv

-cors

-morgan

# Frontend
- axios

- bootstrap

- bootstrap-icons

- react-bootstrap

- react-hook-form
  
# Guía de instalación

## Requisitos previos

Antes de comenzar con la instalación, asegúrate de tener instalados los siguientes programas:

- **Node.js**: Para ejecutar el backend y el frontend.
- **MongoDB**: Para gestionar la base de datos.
- **Git**: Para clonar el repositorio.

**Nota:**
Asegurate de tener MongoDB corriendo en local o en la nube




- **Clona el repositorio**

    ```bash
    git clone https://github.com/2ergio/Reto-Kiggu
    ```
    

### Backend

1. **Instala las dependencias del backend:**

    Abre una terminal y Entra a la carpeta del backend e instala las dependencias:

    ```bash
    cd 2.ProyectoFullStack
    cd Backend
    npm install
    ```

2. **Crea el archivo `.env`:**

    Dentro de la carpeta del backend, crea un archivo `.env` con la siguiente estructura:

    ```plaintext
    DATABASE=<tu_conexion_mongodb> 
    
    ```

    - Reemplaza `<tu_conexion_mongodb>` con la URI de tu base de datos en MongoDB.

3. **Inicia el servidor:**

    Una vez configurado el archivo `.env`, corre el siguiente comando para iniciar el servidor:

    ```bash
    npm run dev
    ```

    El servidor de backend debería iniciarse en el puerto predeterminado (3000), puede ser modificado en el index.js.

---

### Frontend

1. **Instala las dependencias del frontend:**

    Abre otra terminal y entra a la carpeta del frontend e instala las dependencias:

    ```bash
    cd 2.ProyectoFullStack
    cd frontend
    npm install
    ```

2. **Inicia la aplicación frontend:**

    Una vez que las dependencias estén instaladas, corre el siguiente comando para iniciar el servidor de desarrollo de React:

    ```bash
    npm run dev
    ```

    La aplicación frontend debería abrirse automáticamente en tu navegador en el puerto 3000 o el puerto configurado.

---
## Notas importantes

- Asegúrate de tener configurado MongoDB si es una base de datos local o un servicio en la nube (como MongoDB Atlas).
- El backend y el frontend deben correr en puertos diferentes, por lo que revisa que no haya conflictos.

## Para Ejecutar los ejercicios de lógica, poner el script correcto en el index.html y ejecutar la pagina en el navegador
