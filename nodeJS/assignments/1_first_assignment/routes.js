const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write("<body");
    res.write("<h1>Hello, welcome to the first assignment!</h1>");
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>'
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Users</title></head>");
    res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/create-user" && method === "POST") {
    const requestBody = [];
    req.on("data", (chunk) => {
      requestBody.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(requestBody).toString();
      const username = parsedBody.split("=")[1];
      console.log(username);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

exports.handler = requestHandler;
