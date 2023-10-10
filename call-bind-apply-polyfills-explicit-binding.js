// call - this method is used to point the `this` keyword of a function to certain object.
// apply - this method works the same way as `call` method but it takes an array of arguements not arguements separated by commas unlike `call` method.
// bind - this method works the same way like both `call` and `apply` method, but it returns a function instead.

const userDetails = { name: "Vedant" };
const age = 21;
const profession = "Software Engineer";

function greet() {
  return `Hello, ${this.name}.\nYou are ${age} years old.\nYou are a ${profession}.`;
}

console.log(greet.call(userDetails, age, profession));
console.log(greet.apply(userDetails, [(age, profession)]));

const bindedGreet = greet.bind(userDetails);
console.log(bindedGreet(age, profession));

const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log(`#${i + 1} ${this.species}: ${this.name}`);
  };
  this.print();
}

for (let i = 0; i < animals.length; ++i) {
  printAnimals.call(animals[i], i);
}

// append an array to another array
const a = [1, 2, 3];
const b = ["a", "b", "c"];
console.log(a);
console.log(b);
a.push.apply(a, b);
console.log(a);

// find max/min from an array
const arr = [1, 2, 3, 4, 99];
console.log(Math.max.apply(arr, arr));
console.log(Math.min.apply(arr, arr));

// polyfill for call
Function.prototype.polyfilledCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function.`);
  }
  context.fn = this;
  return context.fn(...args);
};

console.log(greet.polyfilledCall(userDetails, age, profession));

// polyfill for apply
Function.prototype.polyfilledApply = function (context, args) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function.`);
  }
  if (!Array.isArray(args)) {
    throw new TypeError(`${args} is not an array.`);
  }
  context.fn = this;
  return context.fn(...args);
};

console.log(greet.polyfilledApply(userDetails, [age, profession]));

// polyfill for bind
Function.prototype.polyfilledBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function.`);
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const greetBinded = greet.polyfilledBind(userDetails, age);
console.log(greetBinded(profession));
