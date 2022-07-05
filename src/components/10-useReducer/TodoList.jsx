import { TodoItem } from "./";
export const TodoList = ({ value }) => {
  return (
    <>
      <ul className="list-group">
        {value.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};
