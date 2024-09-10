# server.js
### Importamos los modulos necesarios:
- 'express' = This is the Express.js module used to create the Server.
- 'mongodb' = This is the MongoDB module used to connect to the database.
- 'cors' = This is the CORS (Cross-Origin Resource Sharing) module used to enable cross-origin requests.
- import { config } from 'dotenv' = dotenv is a module used for loading 'environment variables' from a .env file into process.env, {process} es un objeto global de NodeJS.
- config() = The config function is used to load the environment variables from the .env file. 

### Desestructuramos estas ‘variables de entorno’ necesarias para conectarse a la base de datos MongoDB.
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

### Crear Endpoints.
- app.get() = Es un método en Express.js que se utiliza para manejar solicitudes HTTP de tipo GET a un endpoint específico en mi aplicación.
- Este método toma dos argumentos:
1. El path ('/api/data') = Esta es la URL/RUTA especificada para obtener los datos de la solicitud.
2. Callback/Handler = Esta función se ejecuta cuando el servidor recibe una solicitud HTTP en la ruta especificada.
- (req, res) = (Request): Representa la solicitud HTTP del cliente.
- (req, res) = (Response): Representa la respuesta HTTP que el servidor envía al cliente que hizo la solicitud.
- Dentro de la funcion del Callback/Handler, el código se conecta a la base de datos de MongoDB, se trae todos los datos de la colección especificada (WorkData) y los envía como una respuesta (res) en formato JSON.

- await client.connect(); = Espera la conexión a la base de datos, indicando que la ejecución del código se detendrá hasta que se establezca la conexión.
- const db = client.db(DB_NAME); = Se trae la referencia de mi base de datos "OnlineResume" de MongoDB.
- const collection = db.collection(DB_COLLECTION); = Se trae la referencia de mi collección "WorkData" dentro de mi base de datos "OnlineResume"
- const documents = await collection.find({}).sort({ order: 1 }).toArray(); = Esta línea de código busca toda la data en la colección, la ordena ascendentemente, y la convierte en un array que se almacena en la constante "documents".
- res.json(documents); = Se toma el array de "documents" y lo envía como una respuesta JSON al cliente que hizo la solicitud.
- JSON es un formato común y estándar para intercambiar datos entre servidores y clientes web.

### 
- app.listen(DB_PORT, () => {}); = La función app.listen() inicia el servidor y escucha en el puerto especificado por DB_PORT.



# .env
- Aqui se almacenan las variables de entorno.
- Estas variables se utilizan para configurar el entorno de la aplicación sin tener que cambiar el código fuente.
- Las variables de entorno definidas en el archivo .env del lado del /server, tambien se deben definir del lado del /client pero dentro de un archivo llamado config.ts que actúa como un puente entre las variables de entorno definidas en el servidor y el cliente.

## ¿Por qué usar un archivo .env?
- Seguridad: Mantiene las claves API, credenciales y otros datos sensibles fuera del código fuente, lo que reduce el riesgo de filtraciones.
- Portabilidad: Permite cambiar configuraciones sin modificar el código, lo que facilita el despliegue en diferentes entornos (desarrollo, pruebas, producción).
- Organización: Centraliza la configuración, lo que hace que sea más fácil de mantener y actualizar.
