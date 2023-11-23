console.log([..."VEDANT"]);

const userDetails = {
  name: "Vedant Yetekar",
  age: 21,
  college: "VIIT",
  city: "Pune",
  gender: "male",
};

console.log(JSON.stringify(userDetails, ["age", "city"]));

// object referencing
let person = { name: "Raj" };
const members = [person];
// person = null;
person.name = null;
console.log(members);

// ex5
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);

// ex6
function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };
  return person;
}

const p1 = {
  name: "Alex",
  age: 30,
};

const p2 = changeAgeAndReference(p1);

console.log(p1);
console.log(p2);

// shallow copy: having a reference to same data type.
// deep copy: creating a complete new copy of it.

// ways to deep copy object
const p3 = { ...p1 };
// const p3 = JSON.parse(JSON.stringify(p1));
// p3.name = null;
// const p3 = Object.assign({}, p1);

console.log(p3);
