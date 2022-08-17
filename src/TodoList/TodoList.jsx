import Todo from "../Todo";
import Status from "../Status/Status";
const TodoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            todos={props.todos}
            setTodos={props.setTodos}
            value={todo.value}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
