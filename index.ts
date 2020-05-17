import { from } from 'rxjs'
import { filter, map } from 'rxjs/operators';

interface ServerFruit {
  name: string,
  icon: string,
  isFresh: boolean
}
interface Fruit {
    name: string;
}
const serverFruit1: ServerFruit = {
   name: 'apple',
   icon: '🍎',
   isFresh: true
}

// Filter the given source `fruitSource$` to only contain `Fruit` objects with property `isFresh` set to `true`.
const fruitSource$ = from([serverFruit1]);
const fruitResult$ = fruitSource$.pipe(
   filter((o: ServerFruit) => o.isFresh),
   map(({ name, icon }) => {
     const fruit: Fruit = {
       name: `(${icon}) ${name}`
     };
     return fruit;
   })
);
fruitResult$.subscribe({
    next(fruit) {console.log('Fresh fruit', fruit)}
});
