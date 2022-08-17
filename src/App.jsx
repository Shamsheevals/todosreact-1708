import { useState} from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import "./index.css";
import "./App.css";
import Status from "./Status";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
  const [counter,setCounter]=useState([]);

  const createTodo = (title) => {
    const todo = { 
      value: title,
      completed: false,
      id: Math.random() * 1000,
     }; 
    setTodos([...todos,todo]);
   
  };
  return (
    <div className="App">
      <header>
        <h1>Todos</h1>
      </header>
      <Form
         todos={todos}
         setTodos={setTodos}
        setStatus={setStatus}
        filterTodos={filterTodos}
        onCreate={createTodo}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filterTodos={filterTodos}
      status={status}
      setStatus={setStatus}
      setFilterTodos={setFilterTodos}
      />
      <Status
      todos={todos}
      setTodos={setTodos}
      filterTodos={filterTodos}
      status={status}
      setStatus={setStatus}
      setFilterTodos={setFilterTodos}
      counter={counter}
      setCounter={setCounter}
      />
    </div>
  );
};

export default App;