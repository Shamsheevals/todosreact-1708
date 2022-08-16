
const Status=(props)=>{
  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };
  return(
      <ul  name="todos">
  <li value="all">Все</li>
  <li value="completed">Выполнено</li>
  <li value="uncompleted">Не выполнено</li>
</ul>
  )
}
export default Status



