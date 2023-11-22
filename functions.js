"use strict";
// function expression
const square = function (num) {
    return num * num;
};
console.log(square(5));
// first class functions: in a language where functions can be treated as variables.
function displayResult(fn) {
    console.log(`Square is ${fn(5)}.`);
}
displayResult(square);
// IIFE: Immediately Invoked Function Expressions
(function () {
    console.log("Hello world!");
})();
(function (x) {
    return (function (y) {
        console.log(x);
    })(2);
})(1);
// let and const declarations creates block scope
// var declarations creates global scope
for (let i = 1; i <= 5; ++i) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}
// functions are hoisted completely
greet();
function greet() {
    console.log("hello world");
}
// o/p based question
var x = 21;
var fn = function () {
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
function fn1() {
    console.log(arguments); // arguments available
}
const username = "Parth Yetekar";
const general = {
    username: "Vedant Yetekar",
    normalGreet: function () {
        console.log(`Hello ${this.username}.`);
    },
    arrowGreet: () => {
        // console.log(`Hello ${this.username}.`);
    },
};
general.normalGreet();
general.arrowGreet();
