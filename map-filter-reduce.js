// polyfill for map
Array.prototype.myMap = function (cb) {
  const result = new Array();
  for (let i = 0; i < this.length; ++i) {
    result.push(cb(this[i]));
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];

const mappedArr = arr.myMap((num, id) => {
  return num + 100;
});

console.log(mappedArr);
