import { createSelector } from "@reduxjs/toolkit";
import { RootState } from './store';

const todosList= (store) => store.state.todosArr;
const todosFilter = (store) =store.state.filterArr;

export const SelectorTodos = createSelector(
  [todosList, todosFilter],
  (todosArr, filterArr) => {
      return todosArr.filter((todo) => {
          if (filterArr === "all") {
            return todo;
          } else if (filterArr === "completed") {
            return todo.completed;
          } else {
            return !todo.completed;
          }
        });
      })
    