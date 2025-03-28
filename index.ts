import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Validate DATABASE_URL
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL is not defined in the environment variables.');
}

// Connect to MongoDB
mongoose
  .connect(databaseUrl)
  .then(() => console.log('Connected to database'))
  .catch((error) => console.error('Database connection error:', error));

// Handle 404 errors
app.all('*', (req: Request, res: Response) => {
  res.status(404).send('<h1>Resource not found</h1>');
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});