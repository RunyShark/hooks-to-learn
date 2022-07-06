import { TodoList, TodoForm } from "./";
import { useTodo } from "../hooks";
export const TodoApp = () => {
  const { handleNewTodo, deleteOneTaks, endTaks, todos } = useTodo();
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
