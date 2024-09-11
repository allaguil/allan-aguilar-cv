import express, { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import { config } from 'dotenv';
config();

// Definimos los tipos de las variables de entorno
const { DB_PORT, DB_URI, DB_NAME, DB_WORKCOLLECTION, DB_CONTACTCOLLECTION } = process.env as {
  DB_PORT: string;
  DB_URI: string;
  DB_NAME: string;
  DB_WORKCOLLECTION: string;
  DB_CONTACTCOLLECTION: string;
};

const app = express();
app.use(cors());
app.use(express.json());  // Para parsear JSON

// Cliente de MongoDB
const client = new MongoClient(DB_URI);

// Conexión a MongoDB
async function connectToMongo() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}
connectToMongo();

// Endpoint para recibir los datos del formulario
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, modality, company, companyUrl, role, technologies, jobDescription } = req.body;

    if (!name || !email || !modality || !company || !role || !jobDescription) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const db = client.db(DB_NAME);
    const collection = db.collection(DB_CONTACTCOLLECTION);

    const result = await collection.insertOne({
      name,
      email,
      modality,
      company,
      companyUrl,
      role,
      technologies,
      jobDescription,
    });

    res.status(201).json({ message: 'Contact information saved successfully', id: result.insertedId });
  } catch (error) {
    console.error('Error saving contact data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




// Endpoint para obtener datos
app.get('/api/data', async (req: Request, res: Response): Promise<void> => {
  try {
    // await client.connect();
    const db = client.db(DB_NAME);
    const collection = db.collection(DB_WORKCOLLECTION);
    const documents = await collection.find({}).sort({ order: 1 }).toArray();
    res.json(documents);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
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