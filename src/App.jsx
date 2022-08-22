import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "./store/root-reducer";
import { TODOS_LOCALSTORAGE_KEY } from "./components/Constants";
import {FILTER_LOCALSTORAGE_KEY}from "./components/Constants";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Status from "./components/Status";
import "./index.css";
import "./App.css";

const App = () => {
   const dispatch = useDispatch();
  const [filter, setFilter] = useState(FILTER_LOCALSTORAGE_KEY.get()|| "all");
  const {todosArr} = useSelector((state) => state.todosArr);
  



  useEffect(() => {
    TODOS_LOCALSTORAGE_KEY.set(todosArr);
  }, [todosArr]);
  useEffect(() => {
    FILTER_LOCALSTORAGE_KEY.set(filter);
  }, [filter]);

  const createTodo = (title) => {
    const todo = {
      value: title,
      completed: false,
      id: Math.random() * 1000,
    };
    dispatch(addTodoAction(todo));
  };

  const filteredArray = useMemo(() => {
    const arr = todosArr.filter((todo) => {
      if (filter === "all") {
        return todo;
      } else if (filter === "completed") {
        return todo.completed;
      } else {
        return !todo.completed;
      }
    });
    return arr;
  }, [filter, todosArr]);


  return (
    <div className="App">
      <header>
        <h1>Todos</h1>
      </header>
      <Form onCreate={createTodo} 
      />
      <TodoList
        filteredArray={filteredArray}
        todosArr={todosArr}
      />
      <Status filter={filter} setFilter={setFilter} />
      <div className="counter">
        Вcего:{filteredArray.length}
      </div>
    </div>
  );
};
export default App;