# Clean Code

## Intro 

### What is clean code? 

Clean code is not about if the code works or not, it is about whether the code is easy to read and understand. 

### Presentation structure 

 - Learn about dirty code and why its bad. Understand the core rules to follow to write clean code. 

 - See dirty and clean code in action. Dirty to clean code transformations and examples. 

 - Show clean vs dirty code graph.

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

 - Be consistent when naming things

 ```js
    getUsers();
    fetchUsers();
    retrieveUsers();
 ```

### Examples 

 ``` js
 // add examples from out codebase
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

Fails fast and early.
Prefer positive checks.
Use factory functions and polymorphism instead.

## Classes & Data Structures

Object - Private internals (properties), public API (methods) , Used to store and transport data
Data Containers - Public internals, no API, Contain business logic in OOP, Abstractions over concretions

### Demeter’s Law

### SOLID Principles
