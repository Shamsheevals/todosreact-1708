import styles from "./Todo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAction } from "../../store/root-reducer";
import {completeTodoAction} from "../../store/root-reducer";

const Todo = (props) => {
  const dispatch = useDispatch();
  const { todosArr } = useSelector((state) => state);

  const deleteHandler = () => {
  todosArr.filter((el) => el.id !== props.todo.id);
    dispatch(deleteTodoAction(props.todo))
  };

  const completeHandler = () => {
   todosArr.map((item) => {
        if (item.id === props.todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    dispatch(completeTodoAction(props.todo))

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