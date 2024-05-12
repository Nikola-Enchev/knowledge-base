const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/admin", adminRoute);
app.use(shopRoute);

// 404 page
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "page-not-found.html"));
});

const server = http.createServer(app);

server.listen(3000);
