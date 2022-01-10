import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addLocal }) {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    addLocal(text);
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" value={text} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  // 이 함수의 역활은 redux에 있는 데이터를 get해오는 함수이다.
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addLocal: (text) => dispatch(actionCreators.addLocal(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
