# Angular Services
- Used to share data and logic across components

```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MyService {

}
```

- `@Injectable` decorator is required for Angular to know that this class is a service

## Singleton
- Angular creates a single instance of the service and shares it with all components that need it

## Separation of Concerns
- Keep component code clean and focused on the view

## Dependency Injection
- Angular injects the service into the component's constructor

## Providing Services
- application level: `@Injectable({providedIn: 'root'})`
- module level: `@NgModule({providers: [MyService]})`
- component level: `@Component({providers: [MyService]})`

## Create Service with CLI
```bash 
ng generate service my-service

ng g my-service
```
