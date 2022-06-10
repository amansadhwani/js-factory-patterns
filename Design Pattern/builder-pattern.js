class Address {
  constructor(city, pincode) {
    this.city = city;
    this.pincode = pincode;
  }
}

class User {
  constructor(user, { age, email = "aman@gmail.com", address } = {}) {
    this.user = user;
    this.age = age;
    this.email = email;
    this.address = address;
  }
}

const user = new User("Aman");
console.log(user);
const user1 = new User("Aman", {
  age: 28,
  address: new Address("nadiad", 387001),
});
console.log(user1);
