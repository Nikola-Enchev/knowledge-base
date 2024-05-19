<style>
h1 {
    border-bottom: 0;
}
</style>

# MVC

## What is MVC

> _A design pattern that separates your application into three main components: Models, Views andControllers._

> _Good for Separation of Concerns._

### Models:

- Represent your data in your code
- Work with your data (e.g save, fetch)
- Does not matter if you manage data in memory, files or a database

### Views:

- What the user sees
- Decoupled from your application code
- SHouldn't contain too much logic

### Controllers:

- Connection your Models and Views
- Contains the 'in-between' logic
- Split across Middleware Functions
- Routes usually contain the Controllers

## Splitting routes and controllers

### Creating the routes

```ts
// routes/admin.js
const productsController = require("../controllers/products");

router.get("/add-product", productsController.getAddProduct);
router.post("/add-product", productsController.postAddProduct);
```

### Creating the controllers

```ts
// controllers/products.js
const Product = require("../models/product"); // use the model

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title); // create a new product
  product.save(); // save the product
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll(); // fetch all products
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
```

### Creating the model

```ts
// models/product.js
const products = []; // store products (this is usually a database, not an array)

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
};
```
