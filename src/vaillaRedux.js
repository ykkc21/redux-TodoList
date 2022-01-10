import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const Minus = "Minus";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case Minus:
      return count - 1;

    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

add.addEventListener("click", () => {
  countStore.dispatch({ type: ADD });
});

minus.addEventListener("click", () => {
  countStore.dispatch({ type: Minus });
});
