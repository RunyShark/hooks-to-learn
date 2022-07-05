export const TodoItem = ({ descrpcion, done, deleteOne, endUp }) => {
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
      <button className="btn btn-primary" onClick={() => endUp(3)}>
        Terminar
      </button>
      <button className="btn btn-danger" onClick={() => deleteOne(3)}>
        Borrar
      </button>
    </li>
  );
};
