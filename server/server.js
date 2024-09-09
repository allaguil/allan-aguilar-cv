import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import { config } from 'dotenv';
config();

const { DB_PORT, DB_URI, DB_NAME, DB_COLLECTION } = process.env;

const app = express();

app.use(cors());

const client = new MongoClient(DB_URI);


// Endpoint Route Example for Testing
app.post("/users", (req, res) => {
  const {DB_PORT} = process.env
  console.log(DB_PORT, "Testing POST")
  res.send("DATA RECEIVED!!");
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

