import Todo from "../Todo";
const TodoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredArray.map((todo) => (
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
