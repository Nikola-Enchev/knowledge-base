# Clean Code

## Intro 

### What is clean code? 

Clean code is not about if the code works or not, it is about whether the code is easy to read and understand. 

### Presentation structure 

 - Learn about dirty code and why its bad. Understand the core rules to follow to write clean code. 

 - See dirty and clean code in action. Dirty to clean code transformations and examples. 

 - Clean vs dirty code graph.

![alt text](https://blog.finxter.com/wp-content/uploads/2020/11/image-46.png)

### Clean Code is: 

 - Readable and understandable 

 - Reduces cognitive load 

 - Concise and to the point 

 - Should avoid unintuitive names, complex nesting and big code blocks 

 - Should follow common best practices 

 - Should be fun to write and maintain 

### Topics: 

 - Naming

 - Code Structure and Comments 

 - Functions 

 - Conditionals and Error Handling 

 - Classes and Data Structures 

## Naming

### Why good names matter?

Well named things allow us to understand the code without going through the code in details. 

> *There is always more than one way to name something. We don’t always agree on the exact name, but we should follow common rules for naming things.*

### How to choose a good name: 

 - Variable: think of as a data container. Use nouns or short phrase with adjectives.

  ```js
    let userData;
    let isValid;
  ```

 - Function: Describe the operation the function performs. Use verbs or short phrases with adjectives.

  ```js
    sendData();
    inputIsValid();
  ```

 - Classes: Think of the object the class creates. Use nouns.

```js
  class User;
  class RequestBody;
```

### Rules 

 - Avoid using slang only the team understands 

 ``` js
 // add example
 ```

 - Avoid unclear abbreviations

 ```js
  let ymdt = '20210121cte';
 ```

 - Avoid disinformation 

 ```js
  let allAccounts = account.filter((account) => account.status === 'active');
 ```

 - Don’t create methods that sound and look similar, that are also used in the same place 

  ``` js
 // add example
 ```

 - Be consistent when naming things across the project

 ```js
    getUsers();
    fetchUsers();
    retrieveUsers();
 ```

### Examples 

 ``` js
 // add examples from our codebase
 ```

## Code Structure 

### Formatting 

#### Why to format? 

 - Greatly improves readability 

 - Reduces cognitive load

#### Rules: 

  - Use vertical formatting to keep related concepts together and separate concepts which are not closely related. 
  - Keep lines short and add line breaks to improve readability. 
  - Code should be readable like essay top-to-bottom, without many jumps.
  - Consider splitting files with multiple concepts into multiple files.
  - Related concepts should be kept close to each other. (declarations, calls, etc.) 
  - Public and Private methods ordering. (depends of the style guide)
  - Lines of Code should be readable without scrolling. (if line is long extract parts of it into separate declarations)

### Good comments vs Bad comments 

> *Most comments are bad. We should wire code in a way that it is self explanatory.*

#### Good:
 - Legal info
 - Warnings
 - Required explanations (Regex)
 - TODOs

#### Bad:
 - Redundant information. *Using proper names makes the code self explanatory, thus making comments not needed.*
 - Markers. *If you feel that you need to use markers, you have too much code in that file.*
 - Commented out code. *Use version control instead.*
 
## Functions

### Parameters matter

> *The number of function parameters should be minimized.*

  - 0 parameters - No parameters is the ideal case.
  - 1 parameter - Very good. 
  - 2 parameters - Generally OK. Specify the order of the parameters.
  - 3 parameters - Avoid if possible, use an object instead.

### Single responsibility principle

``` js
// is this it?
let theBestFunction = (a) => {
 return a + 1;
}
```

Examples:
  - Validate and save user input
  - Create something
  - Render something

Don’t mix levels of abstraction.

### Levels of abstraction

> *Make the name of the function reflect the level of abstraction in the function*

High level of abstraction:
- You can read the steps the function does and understand what it does without going into details.

``` js
 function registerUser(userData) {
    validateUserData(userData);
    saveUserToDatabase(userData);
    sendWelcomeEmail(userData.email);
  }
```

Low level of abstraction:
- You need to read the code, understand and interpret the different steps.

``` js
 function isPalindrome(inputString) {
    const cleanedString = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let startPointer = 0;
    let endPointer = cleanedString.length - 1;

    while (startPointer < endPointer) {
        if (cleanedString[startPointer] !== cleanedString[endPointer]) {
            return false;
        }
        startPointer++;
        endPointer--;
    }
    return true;
}
```

### Stay DRY
- Reusability matters
- Don’t repeat yourself
- Extract common code into separate functions

> *Code duplication is not always bad.*

### Avoid Useless extractions

Use commons sense and question if splitting a function will improve readability and maintainability.

Do Not:
 - blindly follow all the rules
 - if finding the extracted code will take longer if just we left it in place
 - extract if you can’t produce a name for the extracted function
 - extract if you are just renaming an operation

### Try Keeping functions Pure

A pure functions is:
  - Given the same input, will always return the same output.
  - Produces no side effects.
  - Relies on no external state.
  - Does not mutate state.

If a function has a side effect, it should be obvious from the name of the function.

> *Good functions are easy to test.*


## Control Structures & Errors

Avoid deep nesting by using factory functions and polymorphism.
Prefer positive checks.
Use errors avoid if checks

### User Guards & Fails fast

Rules:
 - Use guards to avoid deep nesting.
 - Prefer positive checks for easier readability.
 - Use factory functions and polymorphism.

``` js
if(email.includes(@)) {
  // do stuff
}
```

``` js
if(!email.includes(@)) {
  return;
}
// do stuff
```
> *Check out examples in the examples/control-structures*

## Classes & Data Structures

> *There is a relation between following Patterns & Principles and writing Clean Code, but they are not the same thing*

Patterns & Principles - Write code which is maintainable and extensible
Clean Code - Write code which is readable and easy understandable

### Objects vs Data Containers

- Object - Private internals (properties), public API (methods), Abstractions over concretions
- Data Containers - Public internals, no API, Contain business logic in OOP, Used to store and transport data

> *The concepts of Objects and Data Container should not be mixed*

``` js
let sqlEngine: any;

class Database {
  private uri: string;
  private provider: any;
  public connection: any;

  constructor(uri: string, provider: any) {
    this.uri = uri;
    this.provider = provider;
  }

  connect() {
    try {
      this.connection = this.provider.establishConnection(this.uri);
    } catch (error) {
      throw new Error('Could not connect!');
    }
  }

  disconnect() {
    this.connection.close();
  }
}

const database = new Database('my-database:8100', sqlEngine);

// using database as a an object
// hight level (we need to know how to work with database only)
database.connect();

// using database as data container
// low level (we need to know how to work with connection)
database.connection.close();
```

### Classes & Polymorphism

> *Used to avoid code duplication*

> *Check the examples at examples/polymorphism*

### Classes should be small

> *You typically should prefer many small classes over a few large classes*
> *Classes should have single responsibility*

``` js
class OnlineShop {
  private orders: any;
  private offeredProducts: any;
  private customers: any;

  public addProduct(title: string, price: number) {}

  public getAvailableItems(productId: string) {}

  public restockProduct(productId: string) {}

  public createCustomer(email: string, password: string) {}

  // Can be extracted in Customer class
  public updateCustomerProfile(customerId: string, name: string) {}

  public loginCustomer(email: string, password: string) {}

  public makePurchase(customerId: string, productId: string) {}

  // Can be extracted in Product class
  public updateProduct(productId: string, title: string, price: number) {}

  public removeProduct(productId: string) {}

  public addOrder(customerId: string, productId: string, quantity: number) {}

  // Can be extracted in Order class
  public refund(orderId: string) {}
  // ...
}
```

### Understanding Cohesion

> *How much are your class methods using the class properties.*

#### Maximum Cohesion
- Each method in the class use all properties

#### No Cohesion
- All methods don't use any class properties

> *The goal is high cohesion. Maximum cohesion is rarely achievable.*

Splitting a large class into smaller classes can improve cohesion.

### Demeter’s Law

Principles of Least Knowledge:
- Don't depend on the internals of "strangers" (other objects which you don't directly know)

``` js
// in this case lastPurchase is "stranger"
this.customer.lastPurchase.date;
```

Code in a method may only access direct internals ( properties and methods) of:
- the object it `belongs to`
- objects that are `stored in properties of that object`
- objects which are `received as method parameters`
- objects which are `created in the method`

``` js
// now the code follows the law of Demeter
this.customer.getLastPurchaseDate();
```

#### Tell, Don't Ask

> *Telling instead of asking is easier to understand and leads to shorter code*
``` js
deliverLastPurchase() {
  // Getting data to do something with it on the next step. (might not be the best approach)
const data = this.customer.lastPurchase.date;
this.warehouse.deliverPurchaseByDate(this.customer, date);
}

deliverLastPurchase() {
  // Tell some part of the application what to do
  this.warehouse.deliverPurchase(this.customer.lastPurchase);
}
```

> *The law of Demeter can be used even when using just functions. Just follow the principle of not digging too deeply into received data unless it is just a data container.*


### SOLID Principles

#### Single Responsibility Principle

> *Classes should have single responsibility - a class shouldn't change for more than one reason.*

``` js
// Violating SRP
class ReportDocument {
  // Generating, connecting and analyzing data
  generateReport(data: any) {}

  // Presenting data
  createPDF(report: any) {}
}
```

``` js
// NOT violating SRP (probably)
class User {
login(email: string, password: string) {}

signUp(email: string, password: string) {}

assignRole(role: any) {}
}
```

##### SRP & Clean Code:
- Restricting classes to one core responsibility leads to smaller classes
- Smaller classes tend to be easier to read

#### Open-Closed Principle

> *Class should be open for extension but closed for modification*

``` js
// Altho the class has a single responsibility it violates Open-Closed Principle
// The problem with this class is that it needs to grow when we add new functionality. What if we need to print word documents or excel spreadsheets?
class Printer {
  printPDF(data: any) {}

  printWebDocument(data: any) {}

  printPage(data: any) {}

  verifyData(data: any) {}
}
```

``` js
// Where when we add new feature we don't modify the printer class, but we extend it.
interface Printer {
  print(data: any);
}

class PrinterImplementation {
  verifyData(data: any) {}
}

class WebPrinter extends PrinterImplementation implements Printer {
  print(data: any) {
    // print web document
  }
}
```

> *Extensibility ensures small classes (instead of growing classes) and can help prevent code duplication (DRY)*

> *Smaller classes and DRY code increase readability and maintainability*

#### Liskov Substitution Principle

#### Interface Segregation Principle

#### Dependency Inversion Principle

