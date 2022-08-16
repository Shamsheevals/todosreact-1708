import { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import "./index.css";
import "./App.css";
import Status from "./Status/Status";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "all":
        setFilterTodos(
          todos.filter(
            (todo) => todo.completed === true || todo.completed === false
          )
        );
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  const createTodo = (title) => {
    const newTodo = { 
      value: title,
      completed: false,
      id: Math.random() * 1000,
     };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <header>
        <h1>Todos</h1>
      </header>

      <Form
        setStatus={setStatus}
        filterTodos={filterTodos}
        onCreate={createTodo}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filterTodos={filterTodos}
      />
      <Status
      todos={todos}
      setTodos={setTodos}
      filterTodos={filterTodos}
      status={status}
      setStatus={setStatus}
      />
    </div>
  );
};

export default App;