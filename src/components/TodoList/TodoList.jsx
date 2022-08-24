import Todo from "../Todo";
import { useSelector } from "react-redux";
import { SelectorTodos } from "../../store/reselect";


const TodoList = (props) => {
  const todosList = useSelector(SelectorTodos);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todosList.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            value={todo.value}
            deleteHandler={props.deleteHandler}
            completeHandler={props.completeHandler}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
