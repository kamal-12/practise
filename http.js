const http = require('http://localhost:3000/');

// Create a server instance
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(3000, {'Content-Type': 'text/plain'});

  // Send the response body "Hello World"
  res.end('Hello World\n');
});

// Define the port the server will listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:3000`);
});
