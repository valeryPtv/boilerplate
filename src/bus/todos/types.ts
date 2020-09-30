import { CreateTodoInput, UpdateTodoInput, DeleteTodoInput } from './api/types';

export type Todo = {
  id: string
  text: string
  isCompleted: boolean
};

export type Todos = Array<Todo>;

// ----------------------------- Fetch -----------------------------
export const SET_TODOS = 'SET_TODOS';
export type SetTodosActionType = {
  type: typeof SET_TODOS;
  payload: Todos;
};
export type SetTodosContract = (payload: Todos) => SetTodosActionType

export const SET_TODOS_ASYNC = 'SET_TODOS_ASYNC';
export type SetTodosAsyncActionType = {
  type: typeof SET_TODOS_ASYNC,
};
export type SetTodosAsyncContract = () => SetTodosAsyncActionType


// ----------------------------- Create -----------------------------
export const SET_TODO = 'SET_TODO';
export type SetTodoActionType = {
  type: typeof SET_TODO;
  payload: Todo;
};
export type SetTodoContract = (payload: Todo) => SetTodoActionType;

export const SET_TODO_ASYNC = 'SET_TODO_ASYNC';
export type SetTodoAsyncActionType = {
  type: typeof SET_TODO_ASYNC;
  payload: CreateTodoInput;
};
export type SetTodoAsyncContract = (payload: CreateTodoInput) => SetTodoAsyncActionType;

// ----------------------------- Update -----------------------------
export const UPDATE_TODO = 'UPDATE_TODO';
export type UpdateTodoActionType = {
  type: typeof UPDATE_TODO;
  payload: Todo;
};
export type UpdateTodoContract = (payload: Todo) => UpdateTodoActionType

export const UPDATE_TODO_ASYNC = 'UPDATE_TODO_ASYNC';
export type UpdateTodoAsyncActionType = {
  type: typeof UPDATE_TODO_ASYNC;
  payload: UpdateTodoInput
};
export type UpdateTodoAsyncContract = (payload: UpdateTodoInput) => UpdateTodoAsyncActionType

// ----------------------------- Delete -----------------------------
export const DELETE_TODO = 'DELETE_TODO';
export type DeleteTodoActionType = {
  type: typeof DELETE_TODO;
  payload: string;
};
export type DeleteTodoContract = (payload: string) => DeleteTodoActionType

export const DELETE_TODO_ASYNC = 'DELETE_TODO_ASYNC';
export type DeleteTodoAsyncActionType = {
  type: typeof DELETE_TODO_ASYNC;
  payload: DeleteTodoInput;
};
export type DeleteTodoAsyncContract = (payload: DeleteTodoInput) => DeleteTodoAsyncActionType

export type TodosActionTypes =
  | SetTodosActionType
  | SetTodoActionType
  | UpdateTodoActionType
  | DeleteTodoActionType
