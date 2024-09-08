# useFetchWorkData
- useFetchWorkData es un custom hook que realiza una solicitud a una API para obtener datos.
- Los datos se obtienen de la API, se almacenan en el estado (data) y se devuelven para que los componentes que usan el hook puedan acceder a ellos.
- Se inicializa un estado inicial con un array vacio [] con el uso del useState hook, 
- Las variables de entorno definidas en el archivo .env del lado del /server, tambien se deben definir del lado del /client pero dentro de un archivo llamado config.ts que actúa como un puente entre las variables de entorno definidas en el servidor y el cliente.