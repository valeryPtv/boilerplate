import { SagaIterator } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import {
  createTodoWorker,
  deleteTodoWorker,
  fetchTodosWorker,
  updateTodoWorker,
} from './workers';
import {
  SET_TODOS_ASYNC,
  SET_TODO_ASYNC,
  UPDATE_TODO_ASYNC,
  DELETE_TODO_ASYNC,
} from '../types';

export function* watchFetchTodos(): SagaIterator {
  yield takeEvery(SET_TODOS_ASYNC, fetchTodosWorker);
}

export function* watchTodoWorker() {
  yield takeEvery(SET_TODO_ASYNC, createTodoWorker);
}

export function* watchUpdateTodo() {
  yield takeEvery(UPDATE_TODO_ASYNC, updateTodoWorker);
}

export function* watchDeleteTodo() {
  yield takeEvery(DELETE_TODO_ASYNC, deleteTodoWorker);
}
