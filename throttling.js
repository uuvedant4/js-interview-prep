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

function makeThrottled(fn, d) {
  let last = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    fn(...args);
  };
}

const myDebounce = makeThrottled(() => {
  debouncedCounterCounterElem.textContent = ++debouncedCounter;
}, 1000);
