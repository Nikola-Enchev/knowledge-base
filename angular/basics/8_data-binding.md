# Data Binding
- used for synchronizing data between the component and the view

## String Interpolation
- one way data binding from the component to the view
- also can be used with expressions and methods

```html
  <p> {{ serverId }} </p> 
```

## Property Binding
- one way data binding from the component to the view
- used with any property of a DOM element

```html
  <p [innerText]="serverId"></p>
```

## Event Binding
- one way data binding from the view to the component
- used with any event of a DOM element

```html
  <button (click)="onButtonClick()">Click Me!</button>
```

## Two-Way Binding
- two way data binding between the component and the view


  when a user types in the input field, the value of serverName will be updated
  when the value of serverName is updated, the input field will be updated
```html
  <input type="text" [(ngModel)]="serverName">
```


- the same logic can be achieved by using property binding and event binding

```html
  <input type="text" [value]="serverName" (input)="serverName = $event.target.value">
```
