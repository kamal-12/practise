const net = require("net");

// Create a TCP server
const server = net.createServer((socket) => {
  // Handle incoming connections
  console.log("Client connected");

  // Handle incoming data from clients
  socket.on("data", (data) => {
    console.log(`Received data from client: ${data}`);
    // Echo back the received data to the client
    socket.write(`Server received: ${data}`);
  });

  // Handle client disconnection
  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

// Set the port the server will listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
