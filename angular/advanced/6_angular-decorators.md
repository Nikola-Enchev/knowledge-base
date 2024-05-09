<style>
h1 {
    border-bottom: 0;
}
</style>

# Angular Decorators

## What are Angular Decorators?

> _Decorators are function used to attach metadata to a class, method, property, or parameter._

> _Syntax: We use `@` symbol followed by the decorator name._

## Build it decorators

There are four types of decorators in Angular:

- Class Decorators
- Property Decorators
- Method Decorators
- Parameter Decorators

> _Each decorator type has unique role._

## Class Decorators

`@NgModule` `@Component` `@Injectable` `@Directive` `@Pipe`

> _When angular sees the class decorator it knows that what the type of the class is. Without the decorator it would be just like any other class._

> _Allow us to tell angular which class is a component, module, or service_

> _This is helpful because we don't have to put code inside of the class_

### @NgModule

> _Defines the class as `Angular Module` and provides metadata about the module._

```js
@NgModule({
  declarations: [  ], // Components, Directives, Pipes ... that belong to this module (components can belong to only one module)
  imports:      [  ], // Other modules that this module depends on (shared components ...)
  providers:    [  ], // Services which will be added to the global collection of services (than they can be used in the entire application). Then they can be injected with `Dependency Injection`.
  exports:      [  ], // If other modules need to use components, pipes or directives of the Module they need to be exported here
  bootstrap:    [  ], // The main component of the application (the one that is loaded first) If the module is not the main one, keep this blank.
  entrycomponents: [ ] // Components that are not included in the template but are created dynamically (like modals)
})

```

### @Component

> _Defines the class as `Angular Component` and provides metadata about the module._

```ts
@Component({
  changeDetection?: ChangeDetectionStrategy,
  viewProviders?: Provider[],
  moduleId?: string,
  templateUrl?: string, // tells angular how to render the component's template external template (use templateUrl or template, not both)
  template?: string, // inline template
  styleUrls?: string[], // tells angular how to render the component's styles (use styleUrls or styles, not both)
  styles?: string[],
  animations?: any[],
  encapsulation?: ViewEncapsulation,
  interpolation?: [string, string],
  preserveWhitespaces?: boolean,
})
```

### @Injectable

> _Instructs Angular that a class can be used as a service and it should be injected into other classes._

```ts
@Injectable({
  providedIn?: Type<any> | 'root' | 'platform' | 'any' | null // used to inform Angular how to provide the service
})
```

### @Directive

> _Decorator that marks a class as an `Angular Directive`._

```ts
@Directive({
  selector?: string,
  inputs?: string[],
  outputs?: string[],
  providers?: Provider[],
  exportAs?: string,
  queries?: { [key: string]: any;},
  host?: {[key: string]: string; },
  jit?: true
})
```

### @Pipe

> _Decorator that marks a class as Angular Pipe and supplies configuration metadata._

```ts
@Pipe({
name: string,
pure?: boolean
})
```

## Property Decorators

`@Input` `@Output` `@ContentChild` `@ContentChildren` `@ViewChild` `@ViewChildren` `@HostBinding`

> _Property Decorators are applied to the properties of the class._

### @Input

> _Properties marked with `@Input` can be passed to the component from the parent component._

> _When the value in the parent component changes Angular updates the value in the child component._

### @Output

> _Properties marked with `@Output` can be passed from the component to the parent component._

> _When the value in the child component changes Angular updates the value in the parent component._

> _These properties are instances of `EventEmitter`._

### @ContentChild & @ContentChildren

> _Used to reference and query elements projected into a component via `ng-content`._

`@ContentChild` retrieves the first matching element or directive instance projected into the component, using a token such as a class type or template reference variable.

`@ContentChildren` retrieves all matching elements or directive instances.

These decorators are valuable when you need to manage or modify content passed from the parent component.

### @ViewChild & @ViewChildren

> _Used to access elements within the same component's template._

`@ViewChild` retrieves the first matching element or directive instance within the component's view, similar to `@ContentChild` but only applies within the component's own template.

`@ViewChildren` retrieves all matching elements or directives.

These decorators are helpful for dynamically manipulating or accessing child elements in the component.

### @HostBinding

> _The `@HostBinding` decorator allows a directive or component to bind to a property on the host element._

By specifying a host property (e.g., class or style), the directive or component can change this property dynamically. For instance, you might use @HostBinding('class.is-active') to toggle a CSS class based on a directive's state.

This decorator is often used to integrate seamlessly with existing HTML elements or components by directly manipulating their attributes or styles.

## Method Decorators

`@HostListener`

> _Method Decorators are applied to the methods of the class._

### @HostListener

```ts
@HostListener(eventName: string, args?: string[])
```

## Parameter Decorators

`@Inject` `@Host` `@Self` `@SkipSelf` `@Optional`

> _Parameter Decorators are applied to the constructor parameter of the class._

```ts
// Example of Parameter Decorators
export class ProductService {
  constructor(@Inject(LoggerService) private loggerService) {
    this.loggerService.log("Product Service Constructed");
  }
}
```

### @Inject

> _The `@Inject()` is a constructor parameter decorator, which tells angular to Inject the parameter with the dependency provided in the given token. It is a manual way of injecting the dependency_

### @Host

### @Self

> _The `@Self` decorator instructs Angular to look for the dependency only in the local injector. The local injector is the injector that is part of the current component or directive._

### @SkipSelf

> _The `@SkipSelf` decorator instructs Angular to look for the dependency in the Parent Injector and upwards._

### @Optional

> _`@Optional` marks the dependency as Optional. If the dependency is not found, then it returns null instead of throwing an error_

## Custom decorators

> _Custom decorators extend your app's functionality. For example, a @TrackPage decorator logs the page name when a component loads, enabling seamless analytics tracking. This simplifies applying consistent behavior across components._
