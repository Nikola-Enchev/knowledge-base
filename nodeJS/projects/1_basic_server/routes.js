const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end(); // return is used to exit the function and not execute the rest of the code
  }

  if (url === "/message" && method === "POST") {
    // The `on` method is used to listen to events
    const requestBody = [];
    req.on("data", (chunk) => {
      // This will be executed whenever a new chunk of data is received
      console.log(chunk);
      requestBody.push(chunk);
    });

    // This will be executed when all the data has been received
    req.on("end", () => {
      const parsedBody = Buffer.concat(requestBody).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html"); // will attack a header to the response.
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  return res.end(); // This will send the response, you can not edit the response after this
};

module.exports = { handler: requestHandler };
