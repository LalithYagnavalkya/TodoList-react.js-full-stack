import baseUrl from "./baseUrl";

const getTodos = async () => {
  return await baseUrl.get("/");
};

const createTodo = async (todo) => {
  return await baseUrl.post("/create", todo);
};

export { getTodos, createTodo };
