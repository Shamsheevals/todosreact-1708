
const Status = (props) => {
  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };
  const filterHandler = (value) => {
    let arr = props.todos.filter((todo) => {
      if (!todo.completed) {
        props.counter++;
      }
      if (statusHandler === 'allItem') {
        return true;
      }
      const checkedStatus = (statusHandler === 'chekedItem');
      return todo.completed === checkedStatus;

    });
  };

return (
  <select onChange={statusHandler} name="todos">
    <option value="all">Все</option>
    <option value="completed">Выполнено</option>
    <option value="uncompleted">Не выполнено</option>
  </select>
)}
export default Status



