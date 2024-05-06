// index.js (root)
require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Import and use routes
const recipeRoutes = require('./routes/recipes');
const userRoutes = require('./routes/users');
const pantryRoutes = require('./routes/pantry');

app.use('/api/recipes', recipeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/pantry', pantryRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});