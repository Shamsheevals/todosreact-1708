import {useSelector } from "react-redux";
import { useState } from "react";

import styles from "./Form.module.css";

const Form = (props) => {
  const [inputValue, setInputValue] = useState("");
const { todosArr } = useSelector((state) => state.todosArr);
  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const title = inputValue.trim();
    if (!title) {
      return;
    }
    props.onCreate(title);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Введите значение"
        value={inputValue}
        className={styles.formInput}
        onChange={inputValueHandler}
      />

      <button className={styles.formButton} type="submit">
        Отправить
      </button>
    </form>
  );
};
export default Form;
