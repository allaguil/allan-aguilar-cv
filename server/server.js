// import necessary modules 
import express from 'express'; // This is the Express.js module used to create the server.
import { MongoClient } from 'mongodb'; // This is the MongoDB module used to connect to the database.
import cors from 'cors'; // This is the CORS (Cross-Origin Resource Sharing) module used to enable cross-origin requests.

import { config } from 'dotenv'; // dotenv is a module used for loading 'environment variables' from a .env file into process.env.
config(); // The config function is used to load the environment variables from the .env file.

const { DB_HOST, DB_PORT, API_KEY, DB_URI, DB_NAME, DB_COLLECTION } = process.env; // Destructure these 'environment variables' needed for connecting to the MongoDB database.


// Create an Express application
// The express function is called to create an instance of the Express Application, which will be used to define routes and handle HTTP requests.
const app = express();


// Enable CORS for all routes
app.use(cors());

// Create a new instance of the MongoDB client.
// The MongoClient is instantiated with the DB_URI variable, which specifies the connection URL for the MongoDB database.
const client = new MongoClient(DB_URI);


// Route Example
app.get("/users", (req, res) => {
  const {DB_HOST} = process.env
  console.log(DB_HOST)
  res.send("This will be printed on the page!!");
})


// Define the route handler to fetch data from the database.
// The app.get() defines a route for handling GET requests to '/api/data'.
// Inside the route handler, the code connects to the MongoDB database, fetches all documents from the specified collection, and sends the documents as a JSON response.
app.get('/api/data', async (req, res) => {
  try {
    await client.connect(); // This line awaits the connection to the database, indicating that the code execution will pause until the connection is established.
    const db = client.db(DB_NAME); // retrieves a reference to the DataBase "OnlineResume"
    const collection = db.collection(DB_COLLECTION); // retrieves a reference to the Collection "WorkData"

    // Find all documents in the collection and sends the documents as a JSON response.
    const documents = await collection.find({}).sort({ order: 1 }).toArray();
    res.json(documents); // 'res' is the response object, and json() is a method that serializes the documents array as JSON and sends it as the response

  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
});

// Start the server and listen on the specified port
// The app.listen() starts the server and listens on the specified DB_PORT.
app.listen(DB_PORT, () => {
  console.log(`Server is running on port: ${DB_PORT}`);
});
// To start de local server, you can:
// run 'node server.js' in terminal OR npm run dev

