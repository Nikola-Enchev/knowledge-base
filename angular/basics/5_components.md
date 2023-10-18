# Angular components

- fundamental building block of Angular applications.
- follow MVC pattern

## TypeScript class
- contains properties and methods

## Template
- HTML can be bound to the TypeScript
## CSS
- Styles defined in that component are encapsulated and don't affect other elements.


These 3 things are linked together by the `@Component` decorator

```ts
import { Component } from '@angular/core';

@Component ({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css']
})

export class ExampleComponent {
    // ...
}
```



A new component can be craeted using the Angular CLI:

```bash
ng generate component example-component

ng g c example-component
```