// Import necessary modules
const express = require('express');
const cors = require('cors'); // For handling Cross-Origin Resource Sharing
const app = express();
const port = 3001; // Port for the backend server

// Middleware
app.use(cors()); // Enable CORS for all origins (for development)
app.use(express.json()); // Enable parsing of JSON request bodies

// Basic route for the root URL
app.get('/', (req, res) => {
  res.send('Vivint Clone Backend API is running!');
});

// Example API endpoint: Get product list
app.get('/api/products', (req, res) => {
  // In a real application, you would fetch this data from a database
  const products = [
    { id: 1, name: 'Smart Camera', description: 'High-definition security camera with AI detection.' },
    { id: 2, name: 'Smart Thermostat', description: 'Energy-saving thermostat with remote control.' },
    { id: 3, name: 'Doorbell Camera Pro', description: 'See, hear, and speak to visitors from anywhere.' },
    { id: 4, name: 'Smart Lock', description: 'Keyless entry and remote locking/unlocking.' },
  ];
  res.json(products);
});

// Example API endpoint: Submit a quote request
app.post('/api/quote', (req, res) => {
  const { name, email, phone, message } = req.body;

  // In a real application, you would save this data to a database
  // and potentially send an email notification.
  console.log('New Quote Request:', { name, email, phone, message });

  if (name && email && phone) {
    res.status(200).json({ message: 'Quote request received successfully!', data: req.body });
  } else {
    res.status(400).json({ message: 'Missing required fields for quote request.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Vivint Clone backend server listening at http://localhost:${port}`);
});

/*
To run this Express backend:
1. Make sure you have Node.js installed.
2. Create a new directory for your backend (e.g., 'vivint-backend').
3. Navigate into that directory in your terminal.
4. Run `npm init -y` to create a package.json file.
5. Install necessary packages: `npm install express cors`
6. Save this code as `server.js` (or any other name) in the 'vivint-backend' directory.
7. Run the server using `node server.js`.

You can then access the API endpoints, for example:
- http://localhost:3001/
- http://localhost:3001/api/products
*/
