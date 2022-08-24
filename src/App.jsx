import { useState, useMemo } from "react";
import { useDispatch,useSelector } from "react-redux";
import rootReducer, { addTodoAction } from "./store/root-reducer";
import { filterTodoAction } from "./store/root-reducer";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Status from "./components/Status";
import "./index.css";
import "./App.css"; 

const App = () => {
   const dispatch = useDispatch();
  const todosArr = useSelector(state => state.todosArr)
  const createTodo = (title) => {
    const todo = {
      value: title,
      completed: false,
      id: Math.random() * 1000,
    };
    dispatch(addTodoAction(todo));
  };
  
  return (
    <div className="App">
      <header>
        <h1>Todos</h1>
      </header>
      <Form onCreate={createTodo} 
      />
      <TodoList
        todosArr={todosArr}
      />
      <Status />
      <div className="counter">

      </div>
    </div>
  );
};
export default App;