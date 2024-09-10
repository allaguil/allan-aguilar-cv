import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import { config } from 'dotenv';
config();

const { DB_PORT, DB_URI, DB_NAME, DB_COLLECTION } = process.env;
const app = express();
app.use(cors());
const client = new MongoClient(DB_URI);

// Create Endpoint
app.get('/api/data', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const collection = db.collection(DB_COLLECTION);
    const documents = await collection.find({}).sort({ order: 1 }).toArray();
    res.json(documents);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

// Endpoint Example for Testing
app.post("/users", (req, res) => {
  const {DB_PORT} = process.env
  console.log(DB_PORT, "Testing POST")
  res.send("DATA RECEIVED!!");
})

app.listen(DB_PORT, () => {
  console.log(`Server is running on port: ${DB_PORT}`);
});