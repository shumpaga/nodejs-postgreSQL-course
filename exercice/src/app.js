const express = require('express');
const app = express();
const userRoutes = require('./routes/user');

// Connect to the database
require('./db');

// Configure routes
app.use(express.json());
app.use('/users', userRoutes);

module.exports = app;
