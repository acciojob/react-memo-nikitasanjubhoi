import React, { useState, useMemo, useCallback } from "react";

// ✅ React.memo Component (Prevents unnecessary re-renders)
const TodoList = React.memo(({ todos }) => {
  console.log("TodoList rendered");
  return (
    <ul className="mt-3">
      {todos.map((todo, index) => (
        <li key={index} style={{ padding: "5px 0" }}>
          {todo}
        </li>
      ))}
    </ul>
  );
});

const App = () => {
  // ✅ State Management
  const [todos, setTodos] = useState(["Learn React", "Build a project"]);
  const [counter, setCounter] = useState(0);
  const [task, setTask] = useState("");

  // ✅ Function to add new todo
  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, "New todo"]);
  }, []);

  // ✅ Custom task submit with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim().length > 5) {
      setTodos((prev) => [...prev, task]);
      setTask("");
    } else {
      alert("Task must be more than 5 characters!");
    }
  };

  // ✅ useMemo example - heavy calculation (optimized)
  const expensiveCalculation = (count) => {
    console.log("Expensive calculation running...");
    let num = 0;
    for (let i = 0; i < 100000000; i++) {
      num += count;
    }
    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(counter), [counter]);

  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial" }}>
      <h1>📝 Task Management App (React.memo + useMemo)</h1>

      {/* Counter Section */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Counter: {counter}</h2>
        <button
          onClick={() => setCounter(counter + 1)}
          style={{
            background: "#27aedb",
            color: "white",
            border: "none",
            padding: "8px 15px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Increment
        </button>
        <p>Memoized calculation result: {calculation}</p>
      </div>

      {/* Todo Section */}
      <div style={{ borderTop: "1px solid #ccc", paddingTop: "15px" }}>
        <h2>Todo List</h2>
        <button
          onClick={addTodo}
          style={{
            background: "green",
            color: "white",
            border: "none",
            padding: "8px 15px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Add Todo
        </button>

        <TodoList todos={todos} />

        {/* Custom Task Input */}
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Enter custom task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{
              padding: "8px",
              width: "250px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              background: "#ff5722",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "8px",
              marginLeft: "10px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;


