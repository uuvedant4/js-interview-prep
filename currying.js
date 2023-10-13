// currying - it is a function which takes one arguement and returns a function expecting another arguement.
// f(a, b) ---> f(a)(b)
// curried functions can be constructed by chaining closures by immediately returning their inner functions.

const add = (a) => {
  return function (b) {
    console.log(a + b);
  };
};

add(4)(6);

// infinite currying

const sum = (a) => {
  return function (b) {
    if (!b) {
      return a;
    }
    return sum(a + b);
  };
};

console.log(sum(1)(2)(4)());

// convert a normal function into a curried function
// f(a,b,c) ---> f(a)(b)(c)

function makeCurried(fn) {
  return function curriedFn(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...newArgs) {
        return curriedFn(...args, ...newArgs);
      };
    }
  };
}

const multiply = (a, b, c, d) => {
  return a * b * c * d;
};

const curriedMultiply = makeCurried(multiply);

console.log(curriedMultiply(1)(2)(3)(4));
