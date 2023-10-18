# Forms

## Template-driven forms
- rely on directives
- form handling is done in the template

```html
<form #f="ngForm" (ngSubmit)="onSubmit(f.form.value)">
  <input type="text" name="username" ngModel>
  <input type="text" name="password" ngModel>
  <button type="submit">Submit</button>
```

## Reactive forms
- rely on the Reactive Forms API
- form handling is done in the component

```typescript
import { FormGroup, FormControl } from '@angular/forms';

@Component ({
  ...
})
export class AppComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required, 
      Validators.minLength(2)
    ]),
    lastName: new FormControl('', [
      Validators.required, 
      Validators.minLength(2)
    ]),
  });


  onSubmit() {
    console.log(this.myForm);
  }
}
```

```html
<form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
  <label>
    First Name:
    <input type="text" formControlName="firstName">
    <div *ngIf="profileForm.controls.firstName.invalid && profileForm.controls.firstName.touched">
      First Name is required and should be at least 2 characters long
    </div>
  </label>
  
  <label>
    Last Name:
    <input type="text" formControlName="lastName">
    <div *ngIf="profileForm.controls.lastName.invalid && profileForm.controls.lastName.touched">
      Last Name is required and should be at least 2 characters long
    </div>
  </label>
  
  <button type="submit" [disabled]="profileForm.invalid">Submit</button>
</form>

```

## Form validation
- HTML5 validation (as standard)
- Angular validation (custom)

```typescript
import { FormControl, Validators } from '@angular/forms';

let control = new FormControl('', Validators.required);
```

## Form layout
- Bootstrap and Material provide classes for styling and laying out forms