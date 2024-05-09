<style>
h1 {
    border-bottom: 0;
}
</style>

# Angular Async Pipe

## What is the Async Pipe?

> _The Async Pipe subscribes to an Observable or Promise and returns the latest value it has emitted. When a new value is emitted, the pipe marks the component to be checked for changes._

## How does it work?

- Automatic Subscription. When its used in the template the pipe automatically subscribes to the observable.
- Automatic Unsubscribe. The pipe also handles unsubscribing automatically to prevent memory leaks.
- Template Syntax. It can be used directly in the template with `| async` syntax.

## Example

### Implementation:

```typescript
@Pipe({
  name: "customAsync",
  pure: false,
})
export class CustomAsyncPipe implements PipeTransform, OnDestroy {
  private currentValue: any = null;
  private subscription: Subscription | null = null;

  transform(observable: Observable<any>): any {
    // If there is an active subscription, unsubscribe first
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    // Subscribe to the observable and store the subscription
    this.subscription = observable.subscribe({
      next: (value) => (this.currentValue = value),
      error: (err) => console.error(err),
    });

    return this.currentValue;
  }

  ngOnDestroy() {
    // Cleanup subscription when pipe is destroyed
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
```

### Implementation using change detection

```typescript
// This implementation uses ChangeDetectorRef to trigger change detection
@Pipe({
  name: "customAsync",
  pure: false,
})
export class CustomAsyncPipe implements PipeTransform, OnDestroy {
  private value: any;
  private subscription: any;
  private destroy$ = new Subject<void>();

  constructor(private cdRef: ChangeDetectorRef) {}

  transform(observable: Observable<any>): any {
    if (!this.subscription) {
      this.subscription = observable
        .pipe(
          takeUntil(this.destroy$) // Unsubscribe when component is destroyed
        )
        .subscribe((value) => {
          this.value = value;

          // Important: Mark for check to trigger change detection
          this.cdRef.markForCheck();
        });
    }

    return this.value;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

### Usage:

```html
<div *ngIf="data$ | customAsync as data">{{ data.someProperty }}</div>
```
