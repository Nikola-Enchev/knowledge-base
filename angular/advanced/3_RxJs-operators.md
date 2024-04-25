<style>
h1 {
    border-bottom: 0;
}
</style>

# RxJS Operators

## What are RxJS Operators?

Operators are functions. There are 2 kinds of operators

- Pipeable Operators
- Creation Operators

## Pipeable Operators

> _Pipable Operators are the kind that can be piped to Observables like so:_

```js
observableInstance.pipe(operatorFactory());
// Operator factory functions include: filter(...) and  map(...).
```

> _Popable Opeerator is a pure function which takes on Observable and generates another Observable_

## Creation Operators

> _Creation Operators are the kind that can be called as a standalone functions to create a new observable_

```js
of(1, 2, 3);
```

## Piping

> _In RxJS, you can use the `pipe` method to chain operators together. The `pipe` method takes a number of operators and returns a new observable._

```js
// instead of doing this:
op4()(op3()(op2()(op1()(obs))));

// do this:
obs.pipe(op1(), op2(), op3(), op4());
```

> _As a stylistic matter, op()(obs) is never used, even if there is only one operator; obs.pipe(op()) is universally preferred._

## Higher-order Observables

> _Higher-order Observables are Observables of Observables. They are useful for managing groups of Observables together._

> _Typically we deal with a higher-order Observable by flattening it down to a regular observable._

```js
const fileObservable = urlObservable.pipe(
  map((url) => http.get(url)),
  concatAll()
);
```

Operators used for that are:

- `concatAll()` - subscribes to each inner observable and copies all the emitted values until it completes
- `mergeAll()`
- `switchAll()`
- `exhaustAll()`

## Creation Operators

### `from`

> _Creates an Observable from an Array, a Promise or an iterable object._

```js
import { from } from "rxjs";

const array = [10, 20, 30];
const result = from(array);

result.subscribe((x) => console.log(x));

// Logs:
// 10
// 20
// 30
```

### `fromEvent`

> _Creates an Observable that emits events of a specific type coming from the given event target._

```js
import { fromEvent } from "rxjs";

const div = document.createElement("div");
div.style.cssText = "width: 200px; height: 200px; background: #09c;";
document.body.appendChild(div);

// note optional configuration parameter which will be passed to addEventListener
const clicksInDocument = fromEvent(document, "click", { capture: true });
const clicksInDiv = fromEvent(div, "click");

clicksInDocument.subscribe(() => console.log("document"));
clicksInDiv.subscribe(() => console.log("div"));

// By default events bubble UP in DOM tree, so normally
// when we would click on div in document
// "div" would be logged first and then "document".
// Since we specified optional `capture` option, document
// will catch event when it goes DOWN DOM tree, so console
// will log "document" and then "div".
```

### `of`

> _Converts the arguments to an observable sequence._

```js
import { of } from "rxjs";

of([1, 2, 3]).subscribe({
  next: (value) => console.log("next:", value),
  error: (err) => console.log("error:", err),
  complete: () => console.log("the end"),
});

// Outputs
// next: [1, 2, 3]
// the end˝
```

## Join Creation Operators

### `combineLatest`

> _Combines multiple Observables to create one Observable whose values are calculated from the latest values of each of its input Observables._

```js
import { of, delay, startWith, combineLatest } from "rxjs";

const observables = [1, 5, 10].map((n) =>
  of(n).pipe(
    delay(n * 1000), // emit 0 and then emit n after n seconds
    startWith(0)
  )
); // create array of observables that will emit n after n seconds

const combined = combineLatest(observables); // combine observables
combined.subscribe((value) => console.log(value)); // log values

// Logs
// [0, 0, 0] immediately
// [1, 0, 0] after 1s
// [1, 5, 0] after 5s
// [1, 5, 10] after 10s

// Every time one of the inner observables emits a value, the output observable emits a value that is an array of the most recent values from each of the input observables.
```

### `forkJoin`

> _When all observables complete, emit the last emitted value from each._

> _Accepts an Array or a dictionary of Observables and returns an Observable that emits either an array of values in the exact same order as the passed array, or a dictionary of values in the same shape as the passed dictionary._

```js
import { forkJoin, of, timer } from "rxjs";

const observable = forkJoin([
  of(1, 2, 3, 4), // will emit 1 than 2 than 3 than 4 immediately
  Promise.resolve(8), // will emit 8 after 0 seconds
  timer(4000), // will emit 0 after 4 seconds
]);
observable.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("This is how it ends!"),
});

// Logs:
// [4, 8, 0] after 4 seconds (4 - the last value of the `of`, 8 - from the promise and 0 - from the timer)
// 'This is how it ends!' immediately after
```

### `merge`

> _Creates an output Observable which concurrently emits all values from every given input Observable._

```js
import { merge, fromEvent, interval } from "rxjs";

const clicks = fromEvent(document, "click"); // emits every time a click occurs on the document
const timer = interval(1000); // emits ascending values, one every second(1000ms)
const clicksOrTimer = merge(clicks, timer); // merge clicks and timer
clicksOrTimer.subscribe((x) => console.log(x));

// Results in the following:
// timer will emit ascending values, one every second(1000ms) to console
// clicks logs MouseEvents to console every time the "document" is clicked
// Since the two streams are merged you see these happening
// as they occur.
```

### `race`

> _Returns an observable that mirrors the first source observable to emit an item._

```js
content_copyopen_in_new;
import { interval, map, race } from "rxjs";

const obs1 = interval(7000).pipe(map(() => "slow one"));
const obs2 = interval(3000).pipe(map(() => "fast one")); // this will emit first
const obs3 = interval(5000).pipe(map(() => "medium one"));

race(obs1, obs2, obs3).subscribe((winner) => console.log(winner));

// Outputs
// a series of 'fast one'

// When the first observable emits a value, the result observable unsubscribes from the others. Then only takes notification from the `winner` observable.
```

## Transformation operators

### `map`

> _Applies a given project function to each value emitted by the source Observable, and emits the resulting values as an Observable._

```js
import { fromEvent, map } from "rxjs";

const clicks = fromEvent < PointerEvent > (document, "click");
const positions = clicks.pipe(map((ev) => ev.clientX));

positions.subscribe((x) => console.log(x));
```

### `concatMap`

> _Projects each source value to an Observable which is merged in the output Observable, in a serialized fashion waiting for each one to complete before merging the next._

```js
import { fromEvent, concatMap, interval, take } from "rxjs";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(concatMap((ev) => interval(1000).pipe(take(4))));
result.subscribe((x) => console.log(x));

// Results in the following:
// (results are not concurrent)
// For every click on the "document" it will emit values 0 to 3 spaced
// on a 1000ms interval
// one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
```

### `switchMap`

> _Projects each source value to an Observable which is merged in the output Observable, emitting values only from the most recently projected Observable._

```js
import { of, switchMap } from "rxjs";

const switched = of(1, 2, 3).pipe(switchMap((x) => of(x, x ** 2, x ** 3)));
switched.subscribe((x) => console.log(x));
// outputs
// 1
// 1
// 1
// 2
// 4
// 8
// 3
// 9
// 27
```

### `window`

> _Branch out the source Observable values as a nested Observable whenever windowBoundaries emits._

```js
import { fromEvent, interval, window, map, take, mergeAll } from "rxjs";

const clicks = fromEvent(document, "click");
const sec = interval(1000);
const result = clicks.pipe(
  window(sec),
  map((win) => win.pipe(take(2))), // take at most 2 emissions from each window
  mergeAll() // flatten the Observable-of-Observables
);
result.subscribe((x) => console.log(x));
```

## Filtering Operators

### `debounce`

> _Emits a notification from the source Observable only after a particular time span determined by another Observable has passed without another source emission._

```js
import { fromEvent, scan, debounce, interval } from "rxjs";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(
  scan((i) => ++i, 1),
  debounce((i) => interval(200 * i))
);
result.subscribe((x) => console.log(x));

// Emit the most recent click after a burst of clicks
```

### `filter`

> _Filter items emitted by the source Observable by only emitting those that satisfy a specified predicate._

### `take`

> _Emits only the first `n` values emitted by the source Observable._

```js
import { interval, take } from "rxjs";

const intervalCount = interval(1000);
const takeFive = intervalCount.pipe(take(5));
takeFive.subscribe((x) => console.log(x));

// Logs:
// 0
// 1
// 2
// 3
// 4
```

### `takeUntil`

> _Emits the values emitted by the source Observable until a notifier Observable emits a value._

```js
import { interval, fromEvent, takeUntil } from "rxjs";

const source = interval(1000);
const clicks = fromEvent(document, "click");
const result = source.pipe(takeUntil(clicks));
result.subscribe((x) => console.log(x));
```

### `throttle`

> _Emits a value from the source Observable, then ignores subsequent source values for a duration determined by another Observable, then repeats this process._

> _It's like `debounce`, but emits the first value from the source Observable instead of the last value._

```js
import { fromEvent, throttle, interval } from "rxjs";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(throttle(() => interval(1000)));

result.subscribe((x) => console.log(x));
```

## Join Operators

### `concatAll`

> _Converts a higher-order Observable into a first-order Observable by concatenating the inner Observables in order._

```js
import { fromEvent, map, interval, take, concatAll } from "rxjs";

const clicks = fromEvent(document, "click");
const higherOrder = clicks.pipe(map(() => interval(1000).pipe(take(4))));
const firstOrder = higherOrder.pipe(concatAll());
firstOrder.subscribe((x) => console.log(x));

// Results in the following:
// (results are not concurrent)
// For every click on the "document" it will emit values 0 to 3 spaced
// on a 1000ms interval
// one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
```

## MultiCasting Operators

### `share`

> _Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream hot. This is an alias for multicast(() => new Subject()), refCount()._

```js
import { interval, tap, map, take, share } from "rxjs";

const source = interval(1000).pipe(
  tap((x) => console.log("Processing: ", x)),
  map((x) => x * x),
  take(6),
  share()
);

source.subscribe((x) => console.log("subscription 1: ", x));
source.subscribe((x) => console.log("subscription 2: ", x));

// Logs:
// Processing: 0
// subscription 1: 0
// subscription 2: 0
// Processing: 1
// subscription 1: 1
// subscription 2: 1
// Processing: 2
// subscription 1: 4
// subscription 2: 4
// Processing: 3
// subscription 1: 9
// subscription 2: 9
// Processing: 4
// subscription 1: 16
// subscription 2: 16
// Processing: 5
// subscription 1: 25
// subscription 2: 25
```

## Error Handling Operators

### `catchError`

> _Catches errors on the observable to be handled by returning a new observable or throwing an error._

```js
import { of, map, catchError } from "rxjs";

of(1, 2, 3, 4, 5)
  .pipe(
    map((n) => {
      if (n === 4) {
        throw "four!";
      }
      return n;
    }),
    catchError((err) => of("I", "II", "III", "IV", "V"))
  )
  .subscribe((x) => console.log(x));

// 1, 2, 3, I, II, III, IV, V
```

### `retry`

> _Returns an Observable that mirrors the source Observable with the exception of an error._

```js
import { interval, mergeMap, throwError, of, retry } from "rxjs";

const source = interval(1000);
const result = source.pipe(
  mergeMap((val) => (val > 5 ? throwError(() => "Error!") : of(val))),
  retry(2) // retry 2 times on error
);

result.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log(`${err}: Retried 2 times then quit!`),
});

// Output:
// 0..1..2..3..4..5..
// 0..1..2..3..4..5..
// 0..1..2..3..4..5..
// 'Error!: Retried 2 times then quit!'
```

## Utility Operators

### `tap`

> _Used to perform side-effects for notifications from the source observable_

```js
import { of, tap, map } from "rxjs";

of(Math.random())
  .pipe(
    tap(console.log),
    map((n) => (n > 0.5 ? "big" : "small"))
  )
  .subscribe(console.log);
```

### `delay`

> _Delays the emission of items from the source Observable by a given timeout or until a given Date._

```js
import { fromEvent, delay } from "rxjs";

const clicks = fromEvent(document, "click");
const delayedClicks = clicks.pipe(delay(1000)); // each click emitted after 1 second
delayedClicks.subscribe((x) => console.log(x));
```

### `timeout`

> _Errors if Observable does not emit a value in given time span._

```js
import { interval, timeout } from "rxjs";

const slow$ = interval(900);
const fast$ = interval(500);

slow$
  .pipe(
    timeout({
      each: 1000,
      with: () => fast$,
    })
  )
  .subscribe(console.log);
```

## Mathematical and Aggregate Operators

### `every`

> _Returns an Observable that emits whether or not every item of the source satisfies the condition specified._

```js
import { of, every } from "rxjs";

of(1, 2, 3, 4, 5, 6)
  .pipe(every((x) => x < 5))
  .subscribe((x) => console.log(x)); // -> false
```

## Custom operators

### Extracting common operators

> _Extracting operators sequence to a separate function can make your code more readable and reusable._

```js
import { pipe, filter, map } from "rxjs";

function discardOddDoubleEvent() {
  return pipe(
    filter((n) => n % 2 === 0),
    map((n) => n * 2)
  );
}
```

### Creating new operators

> _If you have to write an operator that cannot be made from combination of existing operators you can create one using the Observable constructor._

You must:

- implement all three Observer functions `next()` `error()` `complete()`
- implement finalization logic that cleans up when the Observable completes
- return the finalization function from the function passed to the Observable constructor

```js
import { Observable } from "rxjs";

function discardOddDoubleEvent() {
  return (source) =>
    new Observable((observer) => {
      const subscription = source.subscribe({
        next(value) {
          if (value % 2 === 0) {
            observer.next(value * 2);
          }
        },
        error(err) {
          observer.error(err);
        },
        complete() {
          observer.complete();
        },
      });

      return () => {
        subscription.unsubscribe();
      };
    });
}
```
