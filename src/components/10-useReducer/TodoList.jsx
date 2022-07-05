import { TodoItem } from "./";
export const TodoList = ({ value, deleteOne, endUp }) => {
  console.log(value.descrpcion);
  return (
    <>
      <ul className="list-group">
        {value.length === 0 ? (
          <>
            <h3>No hay tareas pendientes</h3>
            <p>Agrega una nueva tarea</p>
          </>
        ) : (
          value?.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              deleteOne={deleteOne}
              endUp={endUp}
            />
          ))
        )}
      </ul>
    </>
  );
};
