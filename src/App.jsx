import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompTodos, setIncompTodos] = useState([]);
  const [compTodos, setCompTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompTodos, todoText];
    setIncompTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompTodos];
    newTodos.splice(index, 1);
    setIncompTodos(newTodos);
  };

  // 未完了　→　完了　へ移動させる
  const onClickComp = (index) => {
    const newIncompTodos = [...incompTodos];
    newIncompTodos.splice(index, 1);

    const newCompTodos = [...compTodos, incompTodos[index]];
    setIncompTodos(newIncompTodos);
    setCompTodos(newCompTodos);
  };

  const onClickBack = (index) => {
    const newCompTodos = [...compTodos];
    newCompTodos.splice(index, 1);

    const newIncompTodos = [...incompTodos, compTodos[index]];
    setCompTodos(newCompTodos);
    setIncompTodos(newIncompTodos);
  };

  return (
    <>
      {/* 追加 */}

      <div className="input-area">
        <input
          placeholder="Todo"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      {/* 未完了」 */}
      <div className="incomplate-area">
        <p className="title">未完了</p>
        <ul>
          {incompTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComp(index)}>Comp</button>
                <button onClick={() => onClickDelete(index)}>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
      {/* 追加 */}

      <div className="complate-area">
        <p className="title">完了</p>
        <ul>
          {compTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>Back</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
