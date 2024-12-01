const connectToMongo = require('./db');
const cors = require('cors'); // Import CORS
require('dotenv').config(); // Load environment variables

connectToMongo(); // Connect to MongoDB

const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Use PORT from .env or default to 5000

// Enable CORS for specific origins
app.use(cors({
  origin: ['https://frontend-url.onrender.com'], // Replace with your actual frontend URL
  methods: "GET,POST,PUT,DELETE",
  credentials: true, // Allow cookies and credentials
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth'));

// Start the server
app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
