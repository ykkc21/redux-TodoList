import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";
let a = [];

const addLocal = (text) => {
  a.push({ text, id: Date.now() });
  const add = window.localStorage.setItem("test", JSON.stringify(a));
  return {
    type: ADD,
    add,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const DataEmpty = window.localStorage.getItem("test")
  ? JSON.parse(window.localStorage.getItem("test"))
  : [];

const reducer = (state = DataEmpty, action) => {
  switch (action.type) {
    case ADD:
      // [...state, { text: action.text, id: Date.now() }];
      return JSON.parse(window.localStorage.getItem("test"));
    case DELETE:
      const removeData = state.filter((toDo) => toDo.id !== action.id);
      window.localStorage.setItem("test", JSON.stringify(removeData));
      return JSON.parse(window.localStorage.getItem("test"));
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  // addToDo,
  deleteToDo,
  addLocal,
};

export default store;
