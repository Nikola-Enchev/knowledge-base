# Angular Directives
- control rendering of the HTML(interacts with HTML)

## Component Directives
- Angular components are directives with a template
- Used as a custom HTML element

## Attribute Directives
- Change the appearance or behavior of an element, component or another directive
- Applied as attributes of elements(NgStyle)
- Can have multiple attribute directives per element
- can also pass data with the @Input decorator

```ts
import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {
    constructor(private elementRef: ElementRef) {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
```

## Structural Directives
- Change the DOM by adding and removing DOM elements
- have `*` in front of them (*NgFor, *NgIf)
- can have only 1 structural directive per element
- `ng-container` can be used to wrap multiple structural directives

```ts
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appCustomIf]'
})
export class CustomIfDirective {
    @Input() set appCustomIf(condition: boolean) {
        if (condition) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainerRef.clear();
        }
    }

    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}
}
```
