# Dependency Injection in Angular

### What is Dependency Injection?

Dependency Injection is a design pattern used to better manage dependencies.

- **Decouples code**: Less direct component reliance
- **Easier testing**: Easier simulation of dependencies

### How it works

- **Provider**: Delivers dependencies to classes.
- **Injector**: Recipes for creating dependencies.
- **Decorators**: Tokens used by Angular to inject dependencies.

## Using Dependency injection in Angular

<em><strong> Creating a service with the `@Injectable` decorator</strong></em>

```js
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ExampleService {
  constructor() {}
}
```

<em><strong>Providing the service in the root module with the `providers` array</strong></em>

```js
import { NgModule } from "@angular/core";
import { ExampleService } from "./example-service.service";

@NgModule({
  providers: [ExampleService],
})
export class AppModule {}
```

<em><strong> Injecting the service into a component</strong></em>

```js
export class MyComponent {
  constructor(private exampleService: ExampleService) {}
}
```

## Benefits of Dependency Injection in Angular

- **Simplicity**: Simplifies dependency management by delegating it to the Angular framework.
- **Modularity**: Promotes a clean separation of concerns, making the application easier to develop and maintain.
- **Efficiency**: : Reduces the need for redundant code and improves the overall efficiency of the application.
