const connectToMongo = require('./db');
const cors = require('cors'); // Import CORS
require('dotenv').config();

connectToMongo();
const express = require('express');
require('dotenv').config();

const app = express();
const port = 5000;


// Enable CORS for all routes
app.use(cors()); // Use CORS middleware

app.use(express.json()); // Middleware to parse JSON bodies

// Available Routes
app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`iNotebook backend listening on port http://localhost:${port}`);
});
