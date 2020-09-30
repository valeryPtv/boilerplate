// Core
import { useEffect } from 'react';
import { useSelector } from '../../hooks';
import { useDispatch } from 'react-redux';

// Api
import {
  setTodosAsyncAction,
  setTodoAsyncAction,
  updateTodoAsyncAction,
  deleteTodoAsyncAction,
} from './actions';

// Toglers
import { useTogglersRedux } from '../client';

// Types
import {
  CreateTodoInput,
  DeleteTodoInput,
  UpdateTodoInput,
} from './api/types';

export const useTodosQuery = () => {
  const dispatch = useDispatch();
  const data = useSelector(({ todos }) => todos);
  const { togglersRedux: { isTodosFetching }} = useTogglersRedux();

  useEffect(() => {
    // here dispatch an action which triggers saga
    dispatch(setTodosAsyncAction());
    // fetchTodos();
  }, []);

  return {
    data,
    loading: isTodosFetching,
  };
};

export const useTodosMutations = () => {
  const { togglersRedux: { isTodosFetching }} = useTogglersRedux();
  const dispatch = useDispatch();

  return {
    createTodo: (todo: CreateTodoInput) => void dispatch(setTodoAsyncAction(todo)),
    updateTodo: (todo: UpdateTodoInput) => void dispatch(updateTodoAsyncAction(todo)),
    deleteTodo: (todo: DeleteTodoInput) => void dispatch(deleteTodoAsyncAction(todo)),
    loading:    isTodosFetching,
  };
};
