import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';

import { config } from 'dotenv';
config();

const { DB_HOST, DB_PORT, API_KEY, DB_URI, DB_NAME, DB_COLLECTION } = process.env;

const app = express();

// Enable CORS for all routes
app.use(cors());

const client = new MongoClient(DB_URI);

app.get('/api/data', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const collection = db.collection(DB_COLLECTION);

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

app.listen(DB_PORT, () => {
  console.log(`Server is running on port: ${DB_PORT}`);
});
