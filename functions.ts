// function expression
const square = function (num: number): number {
  return num * num;
};
console.log(square(5));

// first class functions: in a language where functions can be treated as variables.
function displayResult(fn: Function): void {
  console.log(`Square is ${fn(5)}.`);
}

displayResult(square);

// IIFE: Immediately Invoked Function Expressions
(function (): void {
  console.log("Hello world!");
})();

(function (x: number): void {
  return (function (y: number): void {
    console.log(x);
  })(2);
})(1);

// let and const declarations creates block scope
// var declarations creates global scope

for (let i = 1; i <= 5; ++i) {
  setTimeout(function (): void {
    console.log(i);
  }, i * 1000);
}

// functions are hoisted completely
greet();

function greet(): void {
  console.log("hello world");
}

// o/p based question
var x = 21;

var fn = function (): void {
  //   console.log(x);
  var x = 20;
};

fn();

// params vs args
// args: fn(x)
// params: function fn(x) {}

// const fn1 = (a,...numbers, x, y):void => {
//   console.log(x, y);
// };

function fn1(): void {
  console.log(arguments); // arguments available
}

/*
const fn2 = ():void => {
  console.log(arguments); // arguments not available
};
*/

// fn1(1, 2);
// fn2(1, 2);

type objectSkeleton = {
  username: String;
  normalGreet: Function;
  arrowGreet: Function;
};

const username = "Parth Yetekar";

const general: objectSkeleton = {
  username: "Vedant Yetekar",
  normalGreet: function (): void {
    console.log(`Hello ${this.username}.`);
  },
  arrowGreet: (): void => {
    // console.log(`Hello ${this.username}.`);
  },
};

general.normalGreet();
general.arrowGreet();
