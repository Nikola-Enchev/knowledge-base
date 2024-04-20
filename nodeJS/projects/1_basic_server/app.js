// This is the way to import files in node.js
// Either takes a file path or a module name
// Path has to start with ./ - relative path, or / - absolute path
const http = require("http");
const routes = require("./routes"); // This will import the file and execute it

// Create server takes a request listener function that will be executed for every incoming request
const server = http.createServer(routes.handler);

server.listen(3000);
