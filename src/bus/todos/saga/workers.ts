import { call, put } from 'redux-saga/effects';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api';
import {
  SetTodoAsyncActionType,
  UpdateTodoAsyncActionType,
  DeleteTodoAsyncActionType,
} from '../types';
import {
  setTodosAction,
  setTodoAction,
  updateTodoAction,
  deleteTodoAction,
} from '../actions';
import { togglerCreatorAction } from '../../client/togglers';

export function* fetchTodosWorker() {
  try {
    yield put(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
    const todos = yield call(fetchTodos);
    yield put(setTodosAction(todos));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(togglerCreatorAction({ type: 'isTodosFetching', value: false }));
  }
}

// Create
export function* createTodoWorker(action: SetTodoAsyncActionType) {
  try {
    yield put(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
    const todo = yield call(createTodo, action.payload);
    yield put(setTodoAction(todo));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(togglerCreatorAction({ type: 'isTodosFetching', value: false }));
  }
}

// Update
export function* updateTodoWorker(action: UpdateTodoAsyncActionType) {
  try {
    yield put(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
    const todo = yield call(updateTodo, action.payload);
    yield put(updateTodoAction(todo));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(togglerCreatorAction({ type: 'isTodosFetching', value: false }));
  }
}

// Delete
export function* deleteTodoWorker(action: DeleteTodoAsyncActionType) {
  try {
    yield put(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
    const wasDeleted = yield call(deleteTodo, action.payload);
    if (wasDeleted) {
      yield put(deleteTodoAction(action.payload.todoId));
    }
  } catch (error) {
    console.error(error);
  } finally {
    yield put(togglerCreatorAction({ type: 'isTodosFetching', value: false }));
  }
}
