let normalCounter = 0;
let debouncedCounter = 0;

const normalCounterElem = document.querySelector(".normal-ct");
const debouncedCounterCounterElem = document.querySelector(".debounced-ct");
const btn = document.querySelector(".btn");

normalCounterElem.textContent = normalCounter;
debouncedCounterCounterElem.textContent = debouncedCounter;

btn.addEventListener("click", (e) => {
  normalCounterElem.textContent = ++normalCounter;
  myDebounce();
});

function makeDebounced(fn, d) {
  let timer;
  return function (...args) {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, d);
  };
}

const myDebounce = makeDebounced(() => {
  debouncedCounterCounterElem.textContent = ++debouncedCounter;
}, 300);
