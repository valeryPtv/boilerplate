// Instruments
import * as types from './types';

// Set todos
export const setTodosAction: types.SetTodosContract = (payload) => ({
  type: types.SET_TODOS,
  payload,
});
export const setTodosAsyncAction: types.SetTodosAsyncContract = () => ({
  type: types.SET_TODOS_ASYNC,
});

// Set specific todoItem
export const setTodoAction: types.SetTodoContract = (payload) => ({
  type: types.SET_TODO,
  payload,
});
export const setTodoAsyncAction: types.SetTodoAsyncContract = (payload) => ({
  type: types.SET_TODO_ASYNC,
  payload,
});

// Update todoItem
export const updateTodoAction: types.UpdateTodoContract = (payload) => ({
  type: types.UPDATE_TODO,
  payload,
});
export const updateTodoAsyncAction: types.UpdateTodoAsyncContract = (payload) => ({
  type: types.UPDATE_TODO_ASYNC,
  payload,
});

// Delete todoItem
export const deleteTodoAction: types.DeleteTodoContract = (payload) => ({
  type: types.DELETE_TODO,
  payload,
});
export const deleteTodoAsyncAction: types.DeleteTodoAsyncContract = (payload) => ({
  type: types.DELETE_TODO_ASYNC,
  payload,
});

