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
const togggleCheck = async (id) => {
  console.log(id);
  return await baseUrl.patch(`/togglecheck/${id}`);
};

export { getTodos, createTodo, deleteTodo, togggleCheck };
