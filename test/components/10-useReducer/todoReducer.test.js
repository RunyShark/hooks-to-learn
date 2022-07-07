import { todoReducer } from "../../../src/components/10-useReducer";
describe("Test in Reducer", () => {
  const initialState = [
    {
      id: 1,
      descrpcion: "Demo Todo",
      done: false,
    },
  ];
  test("Deafult value must array ", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });
  test("Must add one todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        descrpcion: "Nuevo todo",
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });
  test("Must to show delete the todo send", () => {
    const action = {
      type: "[TODO] delete one taks",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });
  test("Must to show end taks and change state done", () => {
    const action = {
      type: "[TODO] end one taks",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);

    expect(newState).toEqual([{ id: 1, descrpcion: "Demo Todo", done: true }]);
  });
});
