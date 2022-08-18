import { useEffect, useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import "./index.css";
import "./App.css";
import Status from "./Status";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
  const createTodo = (title) => {
    const todo = {
      value: title,
      completed: false,
      id: Math.random() * 1000,
    };
    setTodos([...todos, todo]);
  };
  useEffect(() => {
    const arr = todos.filter((todo) => {
      if (status === "all") {
        return todo;
      } else if (status === "completed") {
        return todo.completed;
      } else {
        return !todo.completed;
      }
    });
    setFilterTodos(arr);
  }, [status, todos]);

  return (
    <div className="App">
      <header>
        <h1>Todos</h1>
      </header>
      <Form onCreate={createTodo} />
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
      <Status setStatus={setStatus} />
     <div className="counter">Всего:{filterTodos.length}</div>
    </div> 
  );
};
export default App;