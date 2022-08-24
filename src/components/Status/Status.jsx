import styles from "./Status.module.css";
import { useSelector } from "react-redux";
import { SelectorTodos } from "../../store/reselect";

const Status = (props) => {
  
  const todosList = useSelector(SelectorTodos);

  const statusHandler = (e) => {
    todosList(e.target.value) ;
  };

  return (
    <select onChange={statusHandler} name="todos" className={styles.select}>
      <option value="all" >Все</option>
      <option value="completed"  >Выполнено</option>
      <option value="uncompleted" >Не выполнено</option>
    </select>
  );
};
export default Status;

