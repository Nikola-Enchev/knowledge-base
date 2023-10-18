# Angular Modules

 - Provide a compilation context for components.(specify which components, directives, and pipes can be used by which other components in the application)
 - Organize related components, directives, and pipes into functional sets.
 - Every Angular app has at least one module, the root module, conventionally named AppModule
 
 ## Importing and exporting(share functionality between modules)
  - can import functionality from other modules (built in or custom FormsModule, HttpClientModule, RouterModule)
  - can export functionality for use by other modules

 ## Declarations(what belongs to this module)
  - contains the components, directives, and pipes that belong to the module.
  - makes them available to other components in the current module.

 ## Providers(inject things that are not inside the modules of the application)
  - services and values that the application requires to run correctly.

 ## Bootstrap(what to run when the module is run)
  - only the root module should set this property.
  - specifies the component(s) that should be bootstrapped when this module is run.

```typescript
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    NotificationsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
    ],
})

export class AppModule { }

```