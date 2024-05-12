<style>
h1 {
    border-bottom: 0;
}
</style>

# Express.js

> _Framework that helps us to write the server-side code in a more structured and efficient way._

> _Express.js is Node.js framework - a package that adds a bunch of utility functions and tools and a clear set of rules on how the app should be built(middleware!)._

> _Its's highly extensible and other packages can be plugged nto it._

- helps outsource some of the work to the framework
- provides a rule set to follow
- provides utility functions
- helps to write clean code
- helps to focus on the core logic
- used for the heavy lifting

## Middleware

> _Middleware is a core concept in Express.js._

> \_Express.js relies heavily on middleware functions - you can easily add them by calling use()

> _Middleware functions handle a request and should call next() to forward the request to the next function in line or send a response._

```ts
const http = require("http");
const express = require("express");

const app = express();

// First middleware
app.use("/", (req, res, next) => {
  // this callback will be executed for every incoming request
  console.log("In the middleware!");

  next(); // allows the request to continue to the next middleware in line
});

// Second middleware
app.use((req, res, next) => {
  console.log("In the middleware!");

  res.send("<h1>Hello from Express!</h1>"); // send a response to the client
  // when next() is not called, the request will not continue to the next middleware
});

const server = http.createServer(app);

server.listen(3000);
```

## Body Parsing

> _In order to be able to read the body of incoming requests, we need to add a middleware that parses the body._

```ts
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(req.body);
});
```

## Rules of Middleware

> _Middleware is executed in the order in which it is registered. From top to bottom in the file._

> _We can use `get` and `post` methods to register middleware for specific routes. In this case the order of registration does not matters._

```ts
router.get("/add-product", (req, res, next) => {});
router.post("/add-product", (req, res, next) => {});
```

## Routing

> _Express.js allows us to split our middleware into separate files._

> _You can filter requests by path and method._

> \_If you filter by method, paths are matched exactly, otherwise, the first segment of a URL is matched.

> _You can use the express router to split your routes across files elegantly._

#### In the `app.js` file:

```ts
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

app.use(adminRoute);
app.use(shopRoute);
```

#### In the `admin.js` file:

```ts
const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/admin/add-product", (req, res, next) => {
  //...
});

router.post("/admin/add-product", (req, res, next) => {
  //...
});

module.exports = router;
```

## Filtering Paths

> _If all the routes start with `/admin`, we can filter the paths in the `app.js` file._

> _Now we can omit the `/admin` part in routes in the `admin.js` file._

```ts
app.use("/admin", adminRoute);
```

## Serving HTML Pages

> _We can serve HTML pages using the `sendFile` method._

> _You're not limited to serving dummy text as a response._

> _You can sendFile()s to your users - e.g HTML files._

> _If a request is directly mad for a file(e.g. a .css file is requested), you can enable static serving for such files via express.static()_

```ts
const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

router.get("/add-product", (req, res, next) => {
  // here we can omit the "../" part by using the rootDir variable
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));

  // will look like this:
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
});
```

```ts
// util/path.js
const path = require("path");
module.exports = path.dirname(require.main.filename);
```

## Serving Static Files

> _We can serve static files using the `express.static` middleware._

```ts
// app.js
// middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));
```

> _Now we can access the files in the `public` folder directly from the browser._

> _This can be useful for serving CSS or images to html files that we send._
