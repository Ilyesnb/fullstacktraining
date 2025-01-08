const express = require('express');
const app = express();
// Route handler
app.get('/', (req, res) => {
 // Simulating an error
 throw new Error('Something went wrong');
});
// Error-handling middleware
app.use((err, req, res, next) => {
 // Handle the error
 console.error(err);
 res.status(500).send('Internal Server Error');
});
// Starting the server
app.listen(3000, () => {
 console.log('Server is running on port 3000');
});