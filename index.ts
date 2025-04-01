import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import Product from './src/model/product.model';

// Load environment variables
dotenv.config();

// Initialize Express app
const app: Application = express();
app.use(express.static('./src/view'))
app.use(express.static('./src/model'))

// Validate DATABASE_URL
const databaseUrl: string = process.env.DATABASE_URL as string;
if (!databaseUrl) {
  throw new Error('DATABASE_URL is not defined in the environment variables.');
}

// Validate and parse PORT
const portEnv: string | undefined = process.env.PORT;
if (!portEnv) {
  throw new Error('PORT is not defined in the environment variables.');
}

// Connect to MongoDB
mongoose
  .connect(databaseUrl)
  .then(() => console.log('Connected to database'))
  .catch((error: Error) => console.error('Database connection error:', error.message));

// Middleware for parsing JSON (optional, if needed)
app.use(express.json());

app.get('/api/products', async(req: Request, res: Response) => {
  try{
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error){
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
})

app.get('/api/product/:id', async(req: Request, res: Response) => {
  try{
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  }catch (error){
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
})

app.post('/api/products', async(req: Request, res: Response) => {
  try{
    const product = await Product.create(req.body);
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error){
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
})

// Handle 404 errors
app.all('*', (req: Request, res: Response) => {
  console.log('Received request:', req.method, req.url);
  console.log('Request body:', req.body);
  res.status(404).send('<h1>Resource not found</h1>');
});
// Start the server
app.listen(parseInt(portEnv, 10), () => {
  console.log(`Server is running on port ${portEnv}`);
});