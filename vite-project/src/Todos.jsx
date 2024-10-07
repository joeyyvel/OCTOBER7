import React from "react";

function Todos({ todos, addTodo }) {
  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </div>
  );
}

export default Todos;
