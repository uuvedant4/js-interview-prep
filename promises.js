// ex 1
console.log("Start");

const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise.then((response) => {
  console.log(response);
});

console.log("End");
// ex 2
console.log("Start");

const fn = () => {
  return new Promise((resolve, reject) => {
    console.log(1);
    resolve("Success");
  });
};

console.log("Middle");

fn().then((response) => {
  console.log(response);
});

console.log("End");

// ex 3
function job(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("Success");
    } else {
      reject("Error");
    }
  });
}

let p = job(true);

p.then((data) => {
  console.log(data);
  return job(false);
})
  .catch((error) => {
    console.log(error);
    return "Error caught";
  })
  .then((data) => {
    console.log(data);
    return job(true);
  })
  .catch((error) => {
    console.log(error);
  });
