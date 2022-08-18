import Todo from "../Todo";
const TodoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filterTodos.map((todo) => (
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
