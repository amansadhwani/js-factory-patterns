function SingleTon(name, age) {
  this.name = name;
  this.age = age;
  if (this.constructor.instance) return this.constructor.instance;
  this.constructor.instance = this;
}

let a = new SingleTon("Aman", 28);
let b = new SingleTon("Rahul", 30);
console.log(a);
console.log(b);
