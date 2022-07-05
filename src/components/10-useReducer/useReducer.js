const ADD_TODO_ACTIO = "ADD_TODO_ACTIO";
const initialState = [
  {
    id: 1,
    todo: "recolectar la piedra del alma",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TODO_ACTIO:
      return [...state, action.payload];

    default:
      return state;
  }
};
let todo = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};

const addTodoAction = {
  type: ADD_TODO_ACTIO,
  payload: newTodo,
};
todo = todoReducer(todo, addTodoAction);
console.log(todo);
