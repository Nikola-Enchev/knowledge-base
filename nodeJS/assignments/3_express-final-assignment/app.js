const http = require("http");
const express = require("express");
const path = require("path");

const app = express();
const usersRoute = require("./routes/users");

app.use(express.static(path.join(__dirname, "public")));

app.use('/', usersRoute);

const server = http.createServer(app);

server.listen(3000);