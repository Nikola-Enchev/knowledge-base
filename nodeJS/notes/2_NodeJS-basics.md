# Understanding the basics

## Core modules

- Node.js ships with multiple modules that ca be imported in any file by using `require(module_name)`
- http (launch a server, send requests)
- https (same as http but with SSL encryption)
- fs (for file system operations)
- path (for working with file paths)
- os (for interacting with the operating system)

```js
// importing
const http = require("http");
const routes = require("./routes"); // This will import the file and execute it

const requestHandler = (req, res) => {
  // some code
};

// exporting
module.exports = { handler: requestHandler };
```

## Understanding requests

- `req` will contain information about the incoming request

```js
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
});

server.listen(3000);
```

## Sending responses

- `res` allows us to send responses back to the client

```js
const http = require("http");

const server = http.createServer((req, res) => {
  // will attach a header to the response.
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
```

## Routing requests

- By checking the url we can check for specific route

```js
if (url === "/message" && req.method === "POST") {
  fs.writeFileSync("messages.txt", "TestTest");
  return res.end();
}
```

## Redirecting requests

- Returning the `302` status code and making the header contain location change

```js
if (url === "/message" && req.method === "POST") {
  res.statusCode = 302;
  res.setHeader("Location", "/");
  return res.end();
}
```

## Setup nodemon

- `nodemon` is a package that will restart the server every time a file is changed

```bash
npm install nodemon --save-dev
```

- Change start script to use `nodemon`.

```bash
"start": "nodemon app.js"q"
```

- Run start command as usual:

```bash
npm run start
```
