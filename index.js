// Import required modules
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const router = require('./route');

// Set up the express app
const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./assets'));
app.use(expressLayouts);

// Extract styles and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Set up routes
app.use('/', router);

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Start the server
app.listen(PORT, () => {
    console.log("Connected to server on port: " + PORT);
});
