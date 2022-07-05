export const TodoItem = ({ descrpcion, done }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <p>
        {descrpcion}{" "}
        {done ? (
          <span style={{ color: "blue" }}> Tarea terminada </span>
        ) : (
          <span style={{ color: "red" }}> Tarea pendiente </span>
        )}
      </p>

      <button className="btn btn-danger">Borrar</button>
    </li>
  );
};
