class Test {
  constructor() {
    this.arr = [];
  }

  subscribe(callbk) {
    this.arr.push(callbk);
  }

  notify(inp) {
    this.arr.forEach((element) => element(inp));
  }
}

const service = new Test();
service.subscribe((value) => console.log(`One: ${value} `));
service.subscribe((value) => console.log(`Two: ${value} `));
console.log(service.arr);
service.notify(1); // One: 1 Two: 1

// React js Example
// class LoginObservable {
//   constructor() {
//     this.observers = [];
//   }

//   subscribe(func) {
//     this.observers.push(func);
//   }

//   unsubscribe(func) {
//     this.observers = this.observers.filter((f) => {
//       return f !== func;
//     });
//   }

//   notify(value) {
//     this.observers.forEach((observer) => {
//       observer(value);
//     });
//   }
// }

// export default new LoginObservable();

// // jsx
// // import loginObservable from './file.js

// const abc = (valueThatChanges) => {
//   console.log("something changed valueThatChanges");
// };

// useEffect(() => {
//   loginObservable.subscribe(abc);

//   () => {
//     loginObservable.unsubscribe(abc);
//   };
// }, []);

// // onclick notify users
// loginObservable.notify(true)
