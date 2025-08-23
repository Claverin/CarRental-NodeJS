import dotenv from 'dotenv';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import mainRoute from './routes/main.route';
import productRoute from './routes/product.route';

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

// Routes
app.use('*', mainRoute);
app.use('/api/products', productRoute);

// Start the server
app.listen(parseInt(portEnv, 10), () => {
  console.log(`Server is running on port ${portEnv}`);
});