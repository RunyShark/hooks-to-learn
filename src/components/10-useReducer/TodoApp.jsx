import { useReducer } from "react";
import { todoReducer, TodoList, TodoForm } from "./";

const initalState = [
  {
    id: new Date().getTime(),
    descrpcion: "Recolectar la piedra del Alma azul",
    done: false,
  },
  {
    id: new Date().getTime() * 2,
    descrpcion: "Recolectar la piedra del Alma amarilla",
    done: false,
  },
];
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initalState);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
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
        <div className="col-7">{<TodoList value={todos} />}</div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          {<TodoForm onNewTodo={handleNewTodo} />}
        </div>
      </div>
    </>
  );
};
