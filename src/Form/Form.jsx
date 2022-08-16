import { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const [inputValue, setInputValue] = useState("");

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Введите значение"
        value={inputValue}
        type="text"
        className={styles.formInput}
        onChange={inputValueHandler}
      />

      <button className={styles.formButton} type="submit">
        <i className="fas fa-plus-square" /> Отправить
      </button>


    </form>
  );
};

export default Form;