# Routing
 - Used to define navigation paths to different application views
 - SPA routing

 ## Configuring Routes
  - Routes are defined as an array of objects
  - Each object has a path and a component

```typescript
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
]
```

 ## Router Outlet
  - Used to define where the component will be rendered

```typescript
<router-outlet></router-outlet>
```

 ## Router Links
  - Used to change the route

```typescript
<a routerLink="/about">About</a>
```

 ## Route Params
  - Variables that are included in the route path
  - Can be used to capture values from the URL

```typescript
const routes: Routes = [
  { path: 'user/:id', component: UserComponent },
]
```

```typescript
  id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
```

  - If the route is expected to change while the component is active, use the observable paramMap
```typescript
ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.id = params.get('id');
  });
}
```
 ## Route Services
  - The router service provides navigation methods that allow you to navigate to a specific route

```typescript
constructor(private router: Router) { }

onButtonClick() {
  this.router.navigate(['/about']);
}
```

 ## Route Guards
  - Interfaces that can be implemented to control navigation to and from a route
  - (CanActivate, CanActivateChild, CanDeactivate, CanLoad)

 ## Route Resolvers
  - Prevents the router from navigating to a route until the data is fetched
  - Used to fetch data before navigating to a route

### Resolver:
```typescript
@Injectable({ providedIn: 'root'})
export class UserResolver implements Resolver<Observable<any>> {
  constructor(private userService: UserService) {}
  
  resolve(route: ActivatedRouteSnapshot) {
    const userId = route,paramMap.get('id');
    return this.userService.getUser(userId);
  }

  }
```

### Route:

```typescript
const routes: Routes = [
  {
    path: 'user/:id',
    component: UserComponent,
    resolve: {
      user: UserResolver
    }
  }
]
```

### Component:

```typescript
@Component({...})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.,route.snapshot.data['user'];
  }
}
```


 ## Lazy Loading
  - Design pattern to delay initialization of an object until the point at which it is needed
  - Improves initial load performance, Only loads what is needed, Promotes modular codebase

### With this setup, when you navigate to '/user', Angular will load the UserModule and display the UserComponent:
```typescript
const routes: Routes = [
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
]
```

### Preloading can be used to load the module in the background while the user is interacting with the application.

