import baseUrl from "./baseUrl";

const getTodos = async () => {
  return await baseUrl.get("/todos");
};

const createTodo = async (todo) => {
  return await baseUrl.post("/create", todo);
};

const deleteTodo = async (id) => {
  console.log(id);
  return await baseUrl.delete(`/delete/${id}`);
};
const togggleCheck = async (todo) => {
  return await baseUrl.patch(`/togglecheck/`, todo);
};

export { getTodos, createTodo, deleteTodo, togggleCheck };
