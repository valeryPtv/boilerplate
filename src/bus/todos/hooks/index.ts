// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../../hooks';

//Types
import { TodoRequest, Dispatch, CreateTodoInput, UpdateTodoInput, DeleteTodoInput } from '../types';

// Api
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api';

// Redux
import {
  setIsTodosLoadingCreatorAction,
  fetchTodosCreatorAction,
  createTodoCreatorAction,
  updateTodoCreatorAction,
  deleteTodoCreatorAction,
} from '../store';

const fetchTodosHandler: TodoRequest = async (dispatch) => {
  try {
    dispatch(setIsTodosLoadingCreatorAction(true));
    const res = await fetchTodos();
    dispatch(fetchTodosCreatorAction(res));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setIsTodosLoadingCreatorAction(false));
  }
};

export const useFetchTodos = () => {
  const dispatch = useDispatch();
  const { isLoading, todos } = useSelector((state) => ({
    isLoading: state.todos.isLoading,
    todos:     state.todos.todos,
  }));

  useEffect(() => {
    fetchTodosHandler(dispatch);
  }, [ dispatch, fetchTodosHandler ]);

  return {
    isLoading,
    todos,
  };
};

const createTodoHandler = async (dispatch: Dispatch, body: CreateTodoInput): Promise<void> => {
  try {
    dispatch(setIsTodosLoadingCreatorAction(true));
    const res = await createTodo(body);
    dispatch(createTodoCreatorAction(res));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setIsTodosLoadingCreatorAction(false));
  }
};

const updateTodoHandler = async (dispatch: Dispatch, input: UpdateTodoInput): Promise<void> => {
  try {
    dispatch(setIsTodosLoadingCreatorAction(true));
    const res = await updateTodo(input);
    dispatch(updateTodoCreatorAction(res));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setIsTodosLoadingCreatorAction(false));
  }
};

const deleteTodoHandler = async (dispatch: Dispatch, todoToDelete: DeleteTodoInput): Promise<void> => {
  try {
    dispatch(setIsTodosLoadingCreatorAction(true));
    await deleteTodo(todoToDelete);
    dispatch(deleteTodoCreatorAction(todoToDelete));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setIsTodosLoadingCreatorAction(false));
  }
};


export const useTodosCrud = () => {
  const dispatch = useDispatch();
  const { isLoading, todos } = useSelector((state) => ({
    isLoading: state.todos.isLoading,
    todos:     state.todos.todos,
  }));

  return {
    createTodo: createTodoHandler.bind(null, dispatch),
    updateTodo: updateTodoHandler.bind(null, dispatch),
    deleteTodo: deleteTodoHandler.bind(null, dispatch),
    isLoading,
    todos,
  };
};
