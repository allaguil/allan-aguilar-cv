# server.js
E

# .env
- Aqui se almacenan las variables de entorno.
- Estas variables se utilizan para configurar el entorno de la aplicación sin tener que cambiar el código fuente.
- Las variables de entorno definidas en el archivo .env del lado del /server, tambien se deben definir del lado del /client pero dentro de un archivo llamado config.ts que actúa como un puente entre las variables de entorno definidas en el servidor y el cliente.

## ¿Por qué usar un archivo .env?
- Seguridad: Mantiene las claves API, credenciales y otros datos sensibles fuera del código fuente, lo que reduce el riesgo de filtraciones.
- Portabilidad: Permite cambiar configuraciones sin modificar el código, lo que facilita el despliegue en diferentes entornos (desarrollo, pruebas, producción).
- Organización: Centraliza la configuración, lo que hace que sea más fácil de mantener y actualizar.
