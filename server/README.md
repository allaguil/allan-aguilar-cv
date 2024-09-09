# server.js
### Importamos los modulos necesarios:
- 'express' = This is the Express.js module used to create the Server.
- 'mongodb' = This is the MongoDB module used to connect to the database.
- 'cors' = This is the CORS (Cross-Origin Resource Sharing) module used to enable cross-origin requests.
- import { config } from 'dotenv' = dotenv is a module used for loading 'environment variables' from a .env file into process.env, {process} es un objeto global de NodeJS.
- config() = The config function is used to load the environment variables from the .env file. 

### Destructure these 'environment variables' needed for connecting to the MongoDB database.
- const { DB_HOST, DB_PORT, API_KEY, DB_URI, DB_NAME, DB_COLLECTION } = process.env;

### Crea una nueva instancia de una aplicación de Express
- Esta es la funcion que crea la instancia de Express express().
- "app" sería el objeto que representa la aplicacion de Express, a través de este objeto puedes definir los "endpoints".
- const app = express();

### Enable CORS for all routes
- app.use(cors());

### Crear una nueva instancia de MongoDB.
- "MongoClient" es una clase que proporciona el paquete oficial de MongoDB para interactuar con la base de datos desde el servidor de NodeJS.
- "DB_URI" es la variable de entorno que contiene la URL de conexión a la base de datos.
- const client = new MongoClient(DB_URI);

### Crear una nueva instancia de MongoDB.




# .env
- Aqui se almacenan las variables de entorno.
- Estas variables se utilizan para configurar el entorno de la aplicación sin tener que cambiar el código fuente.
- Las variables de entorno definidas en el archivo .env del lado del /server, tambien se deben definir del lado del /client pero dentro de un archivo llamado config.ts que actúa como un puente entre las variables de entorno definidas en el servidor y el cliente.

## ¿Por qué usar un archivo .env?
- Seguridad: Mantiene las claves API, credenciales y otros datos sensibles fuera del código fuente, lo que reduce el riesgo de filtraciones.
- Portabilidad: Permite cambiar configuraciones sin modificar el código, lo que facilita el despliegue en diferentes entornos (desarrollo, pruebas, producción).
- Organización: Centraliza la configuración, lo que hace que sea más fácil de mantener y actualizar.
