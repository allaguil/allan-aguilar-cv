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
    const { name, email, modality, jobPosition, jobType, company, companyUrl, jobLevel, skills, jobDescription } = req.body;

    if (!name || !email || !modality || !jobPosition || !jobType || !company || !companyUrl || !jobLevel || !skills || !jobDescription) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const db = client.db(DB_NAME); // OnlineResume
    const collection = db.collection(DB_CONTACTCOLLECTION); // ContactData

    const result = await collection.insertOne({
      name,
      email,
      modality,
      jobPosition,
      jobType,
      company,
      companyUrl,
      jobLevel,
      skills,
      jobDescription,
    });

    res.status(201).json({ message: 'Contact information saved successfully', id: result.insertedId });
  } catch (error) {
    console.error('Error saving contact data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});






// Endpoint para obtener datos
app.get('/api/work', async (req: Request, res: Response): Promise<void> => {
  try {
    const db = client.db(DB_NAME); // OnlineResume
    const collection = db.collection(DB_WORKCOLLECTION); // ContactData
    const documents = await collection.find({}).sort({ order: 1 }).toArray();
    res.json(documents);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Iniciar el servidor
app.listen(parseInt(DB_PORT, 10), () => {
  console.log(`Server is running on port: ${DB_PORT}`);
});