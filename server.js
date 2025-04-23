// Import Express 
const express = require('express'); 
 
// Create an Express application 
const app = express(); 
 
// Set the port number const PORT = 3000; 
// Define a route for the homepage 
app.get('/', (req, res) => { 
    res.send('Hello from Dockerized App!'); 
}); 
 
// Start the server and listen on PORT 3000 
app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`); 
}); 
