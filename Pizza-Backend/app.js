import express, { json } from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import connectDb from './config/db.js';
import cors from "cors"; 

dotenv.config();

const app = express();

const origin = process.env.FRONTEND_ORIGIN || 'http://localhost:3000';

// CORS configuration
app.use(cors({
    origin: origin, // Replace with your frontend URL
    credentials: true, // Allow credentials (cookies, authorization headers)
}));

// Middleware to parse JSON request body
app.use(json());

app.use("/api/auth", authRoutes);

// Connect to database first, then start the server
const startServer = async () => {
  try {
    await connectDb();  // Establish MongoDB connection
    console.log('MongoDB connected');

    // Start the server only after a successful DB connection
    app.listen(5000, () => {
      console.log('Server started on port 5000');
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message);
    process.exit(1); // Exit with failure
  }
};

startServer();
