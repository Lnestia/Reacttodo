import React from "react";

export const IncompTodos = (props) => {
  const { todos, onClickComp, onClickDelete } = props;
  return (
    <div className="incomplate-area">
      <p className="title">未完了</p>
      <ul>
        {todos.map((todo, index) => {
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
  );
};
