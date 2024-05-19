<style>
h1 {
    border-bottom: 0;
}
</style>

# Working with Dynamic Content & Adding templating Engines

## Managing Data without a Database

> _Data can be managed without a database by using an array of objects._

```ts
const products = [];

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.products = products;
```

```ts
const adminData = require("./admin");

// navigates to main page and prints out the products
router.get("/", (req, res, next) => {
  console.log(adminData.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});
```

## Render Dynamic Content in our Views

> _We can render dynamic content in our views by using templating engines._

> _The Templating Engine scans the html file and replaces the placeholders with the html content generated on the fly by the server. Then this html file is sent to the client._

### Templating Engines:

#### EJS

> _User normal HTML and plain JS in your templates_

> _Includes feature: codeblocks that you can reuse in different view s._

```html
<p><%= name %></p>
<p></p>
```

#### Pug (Jade)

> _Use minimal HTML and custom template language_

```html
p #{name}
```

#### Handlebars

> _Use normal HTML and custom template language_

>_Forces us to put our code in the ts file and not in the html file.(which is a good thing)_

```html
<p>{{ name }}</p>
<p></p>
```

### Using a Templating Engine

```ts
// Pug setup
app.set("view engine", "pug"); // tells express to use pug as the templating engine.
app.set("views", "views"); // tells express where to find the views.

// Handlebars setup
const expressHbs = require("express-handlebars"); // import handlebars engine is needed unlike pug or ejs.
app.set("view engine", "hbs");
app.set("views", "views");
```

```ts
router.get("/", (req, res, next) => {
  const products = adminData.products;
  // passing data to engine is the same for all engine. Use key value pairs.
  res.render("shop", { prods: products, docTitle: "Shop" }); // renders the shop.pug file and passes the products and docTitle to the file.
});
```

> _Repetitive boilerplate html code can be placed in a layout file and then the content can be injected into the layout file._

## 