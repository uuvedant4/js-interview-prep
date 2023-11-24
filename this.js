// this keyword

function greet() {
  console.log("Hello world!");
}

console.log(typeof greet);

this.a = 5;
console.log(this);
console.log(this.a);

const user1 = {
  name: "John",
  getName: function () {
    const name = "Alex";
    console.log(this);
    return this.name;
  },
};

const user2 = {
  name: "John",
  getName: () => {
    const name = "Alex";
    console.log(this);
    return this.name; // in arrow function this keyword points to window object and not immediate parent.
  },
};

// console.log(user1.getName());
console.log(user2.getName());

function makeUser() {
  console.log(this);
  return {
    name: "Vedant Yetekar",
    ref() {
      return this;
    },
  };
}

console.log(this);

let user = makeUser();
console.log(user.ref().name);
// user.ref()

// ex
var length = 4;

function cb() {
  console.log(this.length);
}

const object = {
  length: 5,
  method() {
    // arguments[0].bind(object)();
    arguments[0](); // length of arguments array
  },
};

object.method(cb, 2, 3);

// ex
const Calculator = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  divide(a) {
    this.total /= a;
    return this;
  },
};

const result = Calculator.add(10).multiply(5).subtract(30).add(10);

console.log(result.total);
