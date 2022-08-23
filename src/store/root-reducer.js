import { TODOS_LOCALSTORAGE_KEY } from "../components/Constants";

 const initialState = {
  todosArr: TODOS_LOCALSTORAGE_KEY.get()|| [],
filter:""
};
const ADD_TODO = "ADD_TODO";
const DELETE_TODO="DELETE_TODO"
const COMPLETE_TODO="COMPLETE_TODO"

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todosArr: [...state.todosArr, action.payload],
      };

      case DELETE_TODO:
        return {
          ...state,
          todosArr: [...state.todosArr.filter((el) => el.id !== action.payload.id)]
        }

        case COMPLETE_TODO:
          return{
            ...state,
         todosArr:[...state.todosArr.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                completed: !item.completed,
              };
            }
            return item;
          })]
        }
        default:
          return state
  }
}
export const deleteTodoAction = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const addTodoAction = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const completeTodoAction = (payload) => {
  return {
    type: COMPLETE_TODO,
    payload,
  };
};



export default rootReducer;