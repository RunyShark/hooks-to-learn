import { useReducer } from "react";
import { todoReducer, TodoList, TodoForm } from "./";

const initalState = [];
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initalState);

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

  return (
    <>
      <h1>
        App Todo 10 <span>pendientes {todos.length}</span>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {<TodoList value={todos} deleteOne={deleteOneTaks} endUp={endTaks} />}
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          {<TodoForm onNewTodo={handleNewTodo} />}
        </div>
      </div>
    </>
  );
};
