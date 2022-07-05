import { useForm } from "../hooks";
export const TodoForm = ({ onNewTodo }) => {
  const { formState, handleOnChange, onResetForm } = useForm({
    descrpcion: "",
  });
  const { descrpcion } = formState;

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (descrpcion.length <= 1) return;
    const addNewTodo = {
      id: new Date().getTime() * 2,
      descrpcion,
      done: false,
    };
    onNewTodo(addNewTodo);
    onResetForm();
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        value={descrpcion}
        name="descrpcion"
        onChange={handleOnChange}
        placeholder="¿Qué hay que hacer?"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
};
