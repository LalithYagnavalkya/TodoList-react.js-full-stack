import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";

import reducer from "../reducers/todo_reducer";
import { getTodos, createTodo, deleteTodo, togggleCheck } from "../api/todos";

const initialState = {
  isLoading: true,
  todos: [],
  newTodo: { title: "", checked: false },
  deleteId: "",
  toggleCheck: false,
};

const TodoContext = React.createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      dispatch({ type: "GET_ALL_TODOS", payload: response.data });
    } catch (err) {
      console.log("something went wrong");
    }
    dispatch({ type: "SET_LOADING", payload: false });
  };

  const createTodos = async (todo) => {
    createTodo(todo);
    dispatch({ type: "NEW_TODO", payload: todo });
  };
  const deleteTodos = async (id) => {
    deleteTodo(id);
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  const togggleChecks = async (id) => {
    togggleCheck(id);
    dispatch({ type: "TOGGGLE_CHECK", payload: id });
  };
  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.newTodo, state.deleteId, state.toggleCheck]);
  return (
    <TodoContext.Provider
      value={{ ...state, createTodos, deleteTodos, togggleChecks }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
