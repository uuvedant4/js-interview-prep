// closures - When a function bundled together with it's lexical environment forms a closure.

function outer() {
  const username = "Vedant Yetekar";
  return function () {
    console.log(username);
  };
}

// outer()();
const inner = outer();
inner();

// optimizations with closures

function findIthElement() {
  const a = [];
  for (let i = 1; i <= 1000000; ++i) {
    a.push(i * i);
  }
  return function (i) {
    return a[i - 1];
  };
}

const optimizedFindIthElement = findIthElement();
console.time("6");
console.log(optimizedFindIthElement(6));
console.timeEnd("6");

console.time("776");
console.log(optimizedFindIthElement(776));
console.timeEnd("776");

/*
function timer() {
  for (var i = 0; i < 3; ++i) {
    setTimeout(function () {
      console.log(i);
    }, 1000 * i);
  }
}

timer();
*/

/*
function timer() {
  for (let i = 0; i < 3; ++i) {
    setTimeout(function () {
      console.log(i);
    }, 1000 * i);
  }
}

timer();
*/

function timer() {
  for (var i = 0; i < 3; ++i) {
    function inner(i) {
      setTimeout(function () {
        console.log(i);
      }, 1000 * i);
    }
    inner(i);
  }
}

timer();

// once polyfill
function once(fn, context) {
  let runOnce;
  return function () {
    if (fn) {
      runOnce = fn.apply(context || this, arguments);
      fn = null;
    }
    return runOnce;
  };
}

const greet = () => console.log("Hello World!");
const greetOnce = once(greet);

greetOnce();
greetOnce();
greetOnce();

// polyfill for memoize
const clumsySquare = (num1, num2) => {
  for (let i = 1; i <= 100000000; ++i) {}
  return num1 * num2;
};

function memoize(fn, context) {
  const dp = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (dp[argsCache]) {
      return dp[argsCache];
    }
    return (dp[argsCache] = fn.call(context || this, ...args));
  };
}

const memoizedClumsySquare = memoize(clumsySquare);

console.time("First call");
console.log(memoizedClumsySquare(6, 6));
console.timeEnd("First call");

console.time("First call");
console.log(memoizedClumsySquare(6, 6));
console.timeEnd("First call");
