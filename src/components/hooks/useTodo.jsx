import { useReducer, useEffect } from "react";
import { todoReducer } from "../10-useReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
const initalState = [];
export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initalState, init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };
  const deleteOneTaks = (id) => {
    const action = {
      type: "[TODO] delete one taks",
      payload: id,
    };
    dispatch(action);
  };
  const endTaks = (id) => {
    const action = {
      type: "[TODO] end one taks",
      payload: id,
    };
    dispatch(action);
  };
  return {
    todos,
    handleNewTodo,
    deleteOneTaks,
    endTaks,
  };
};
