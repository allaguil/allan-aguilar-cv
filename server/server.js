import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';

const app = express();
const port = 3001; // Choose the desired port number

// Enable CORS for all routes
app.use(cors());

const uri = "mongodb+srv://aguilaaj90:Tornado11@allandb.ra9diul.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

// app.get('/', (req, res) => {
//   res.send('Server is running'); // Send a simple response to indicate that the server is running
// });

app.get('/api/data', async (req, res) => {
  try {
    await client.connect();
    const db = client.db('OnlineResume');
    const collection = db.collection('WorkData');

    // Find all documents in the collection
    const documents = await collection.find({}).toArray();
    res.json(documents);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
