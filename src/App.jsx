import { useEffect, useState,useMemo } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import "./index.css";
import "./App.css";
import Status from "./Status";
import LocalStorage from "./LocalStorage/LocalStorage"


const TODOS_LOCALSTORAGE_KEY = new LocalStorage('todos');
const STATUS_LOCALSTORAGE_KEY = new LocalStorage('filter');
const App = () => {
  const [todos, setTodos] =  useState(TODOS_LOCALSTORAGE_KEY.get() || []);
  const [status, setStatus] = useState(STATUS_LOCALSTORAGE_KEY.get() || 'all');




 useEffect(() => {
    TODOS_LOCALSTORAGE_KEY.set(todos)
  }, [todos]);

useEffect(() => {
    STATUS_LOCALSTORAGE_KEY.set(status);
  }, [status]);
  const createTodo = (title) => {
    const todo = {
      value: title,
      completed: false,
      id: Math.random() * 1000,
    };
    setTodos([...todos, todo]);
  };

  const filteredArray = useMemo(()=> {
    const arr = todos.filter((todo) => {
      if (status === "all") {
        return todo;
      } else if (status === "completed") {
        return todo.completed;
      } else {
        return !todo.completed;
      }
    });
    return arr;
  }, [status, todos]);

  return (
    <div className="App">
      <header>
        <h1>Todos</h1>
      </header>
      <Form onCreate={createTodo} />
      <TodoList todos={todos} setTodos={setTodos} filteredArray={filteredArray} />
      <Status setStatus={setStatus} />
     <div className="counter">Всего:{filteredArray.length}</div>
    </div> 
  );
};
export default App;