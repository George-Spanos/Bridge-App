const express = require('express');
const path = require('path');
const http = require('http');
const api=require("./server/routes/api.js");
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));



/**
 * Create HTTP server.
 */

const server = http.createServer(app);

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);


/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));