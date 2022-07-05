import { TodoItem } from "./";
export const TodoList = ({ value, deleteOne, endUp }) => {
  return (
    <>
      <ul className="list-group">
        {value.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            deleteOne={deleteOne}
            endUp={endUp}
          />
        ))}
      </ul>
    </>
  );
};
