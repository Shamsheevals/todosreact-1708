import styles from "./Todo.module.css";
const Todo = ( props) => {
  const deleteHandler = () => {
    props.setTodos(props.todos.filter((el) => el.id !== props.todo.id));
  };
  const completeHandler = () => {
    props.setTodos(
      props.todos.map((item) => {
        if (item.id ===props.todo.id) {
          return {
            ...item,
            completed: !item.completed,
            
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={styles.todo}>
        <button onClick={completeHandler} className={styles.completeBtn}>
      Сменить статус 
      </button>
      <li className={props.todo.completed ? styles.completed : ""}>
      {props.value}
      </li> 
      <button onClick={deleteHandler} className={styles.deleteBtn}>
   Удалить
      </button>
    </div >
  );
};
export default Todo;