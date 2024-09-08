# server.js
E

# .env
- Aqui se almacenan las variables de entorno.
- Estas variables se utilizan para configurar el entorno de la aplicación sin tener que cambiar el código fuente.
- DB_HOST: La dirección del servidor de base de datos.
- DB_PORT: El puerto en el que el servidor de base de datos está escuchando.
- API_KEY: Una clave de API para acceder a un servicio externo.
- DB_URI: La URI de conexión a la base de datos MongoDB.
- DB_NAME: El nombre de la base de datos en MongoDB.
- DB_COLLECTION: El nombre de la colección dentro de la base de datos en MongoDB.

## ¿Por qué usar un archivo .env?
- Seguridad: Mantiene las claves API, credenciales y otros datos sensibles fuera del código fuente, lo que reduce el riesgo de filtraciones.
- Portabilidad: Permite cambiar configuraciones sin modificar el código, lo que facilita el despliegue en diferentes entornos (desarrollo, pruebas, producción).
- Organización: Centraliza la configuración, lo que hace que sea más fácil de mantener y actualizar.
