import { useEffect, useState, useMemo } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Status from "./components/Status";
import LocalStorage from "./utils/LocalStorage"

import "./index.css";
import "./App.css";

const TODOS_LOCALSTORAGE_KEY = new LocalStorage('todos');
const FILTER_LOCALSTORAGE_KEY = new LocalStorage('filter');

const App = () => {
  const [todos, setTodos] = useState(TODOS_LOCALSTORAGE_KEY.get() || []);
  const [filter, setFilter] = useState(FILTER_LOCALSTORAGE_KEY.get() || 'all');
  useEffect(() => {
    TODOS_LOCALSTORAGE_KEY.set(todos)
  }, [todos]);

  useEffect(() => {
    FILTER_LOCALSTORAGE_KEY.set(filter);
  }, [filter]);

  const createTodo = (title) => {
    const todo = {
      value: title,
      completed: false,
      id: Math.random() * 1000,
    };
    setTodos([...todos, todo]);
  };

  const filteredArray = useMemo(() => {
    const arr = todos.filter((todo) => {
      if (filter === "all") {
        return todo;
      } else if (filter === "completed") {
        return todo.completed;
      } else {
        return !todo.completed;
      }
    });
    return arr;
  }, [filter, todos]);
const counter=!todo.completed;
  return (
    <div className="App">
      <header>
        <h1>Todos</h1>
      </header>

      <Form onCreate={createTodo} />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredArray={filteredArray}
      />

      <Status filter={filter} setFilter={setFilter} />

      <div className="counter">


        {` ${filteredArray.length}`}
      </div>
    </div>
  );
};
export default App;