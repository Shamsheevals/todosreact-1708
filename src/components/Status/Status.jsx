import styles from "./Status.module.css";
const Status = (props) => {
  const statusHandler = (e) => {
    props.setFilter(e.target.value);
  };
  return (
    <select onChange={statusHandler} name="todos" className={styles.select}>
      <option value="all">Все</option>
      <option value="completed">Выполнено</option>
      <option value="uncompleted">Не выполнено</option>
    </select>
  );
};
export default Status;

