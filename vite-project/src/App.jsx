import React, { useState } from "react";
import Todos from "./Todos";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [students, setStudents] = useState(["Joey", "Yvel", "Yeoj"]);

  const incrementCount = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  const handleDelete = (deletingStudent) => {
    const newStudents = students.filter(
      (student) => student !== deletingStudent
    );
    setStudents(newStudents);
  };

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <h1>all students</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}{" "}
            <button onClick={() => handleDelete(student)}>Delete</button>
          </li>
        ))}
      </ul>
      <h1>joey</h1>
      <p>Count:{count}</p>
      <button onClick={incrementCount}>increase</button>
    </div>
  );
}

export default App;
