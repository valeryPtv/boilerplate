import { Reducer } from 'redux';

import {
  Todos,
  TodosActions,
  FETCH_TODOS,
  FetchTodosCreatorAction,
  SET_TODOS_IS_LOADING,
  SetIsTodosLoadingCreatorAction,
  CREATE_TODO,
  CreateTodoCreatorAction,
  UPDATE_TODO,
  UpdateTodoCreatorAction,
  DELETE_TODO,
  DeleteTodoCreatorAction,
} from './types';

export const setIsTodosLoadingCreatorAction: SetIsTodosLoadingCreatorAction = (isLoading) => ({
  type:    SET_TODOS_IS_LOADING,
  payload: isLoading,
});

export const fetchTodosCreatorAction: FetchTodosCreatorAction = (todos) => ({
  type:    FETCH_TODOS,
  payload: todos,
});

export const createTodoCreatorAction: CreateTodoCreatorAction = (todo) => ({
  type:    CREATE_TODO,
  payload: todo,
});

export const updateTodoCreatorAction: UpdateTodoCreatorAction = (todo) => ({
  type:    UPDATE_TODO,
  payload: todo,
});

export const deleteTodoCreatorAction: DeleteTodoCreatorAction = (todoToDelete) => ({
  type:    DELETE_TODO,
  payload: todoToDelete,
});

const initialState = {
  todos:     <Todos>[],
  isLoading: false,
};
type TodosState = typeof initialState;

export const todosReducer: Reducer<TodosState, TodosActions> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, todos: action.payload };

    case SET_TODOS_IS_LOADING:
      return { ...state, isLoading: action.payload };

    case CREATE_TODO:
      return { ...state, todos: [ ...state.todos, action.payload ]};

    case UPDATE_TODO:
      const newTodos = [ ...state.todos ];
      const todoIndex = newTodos.findIndex((item) => item.id === action.payload.id);
      if (todoIndex !== -1) {
        newTodos[ todoIndex ] = action.payload;
      }

      return { ...state, todos: newTodos };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.todoId),
      };

    default:
      return state;
  }
};
