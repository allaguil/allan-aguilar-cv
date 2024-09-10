import express, { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import { config } from 'dotenv';
config();

// Definimos los tipos de las variables de entorno
const { DB_PORT, DB_URI, DB_NAME, DB_COLLECTION } = process.env as {
  DB_PORT: string;
  DB_URI: string;
  DB_NAME: string;
  DB_COLLECTION: string;
};

const app = express();
app.use(cors());

// Cliente de MongoDB
const client = new MongoClient(DB_URI);

// Endpoint para obtener datos
app.get('/api/data', async (req: Request, res: Response): Promise<void> => {
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

// Ejemplo de Endpoint para pruebas
app.post("/users", (req: Request, res: Response): void => {
  console.log(DB_PORT, "Testing POST");
  res.send("DATA RECEIVED!!");
});

// Iniciar el servidor
app.listen(parseInt(DB_PORT, 10), () => {
  console.log(`Server is running on port: ${DB_PORT}`);
});