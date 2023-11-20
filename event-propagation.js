// Event Bubbling & Capturing
const div = document.querySelector(".container");
const p = document.querySelector(".paragraph");
const btn = document.querySelector(".btn");

div.addEventListener("click", logger, true); // capturing
p.addEventListener("click", logger, true); // capturing
btn.addEventListener("click", logger, true); // capturing

function logger(e) {
  alert(
    `Current Target = ${e.currentTarget.tagName}\nClicked Target = ${e.target.tagName}`
  );
}

// Event Delegation
div.addEventListener(
  "click",
  (e) => {
    e.stopImmediatePropagation();
    // e.stopPropagation();
    alert(e.target.className);
  },
  true
);

// Event Propagation
div.addEventListener(
  "click",
  (e) => {
    e.currentTarget.style.borderColor = "green";
    e.currentTarget.style.borderWidth = "10px";
  },
  true
);
