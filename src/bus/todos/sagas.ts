import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './api';
import {
  SET_TODOS_ASYNC,
  SetTodoAsyncActionType,
  SET_TODO_ASYNC,
  UpdateTodoAsyncActionType,
  UPDATE_TODO_ASYNC,
  DELETE_TODO_ASYNC,
  DeleteTodoAsyncActionType,
} from './types';
import {
  setTodosAction,
  setTodoAction,
  updateTodoAction,
  deleteTodoAction,
} from './actions';
import { togglerCreatorAction } from '../client/togglers';

export function* fetchTodosAsync() {
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

export function* handleFetchTodos(): SagaIterator {
  yield takeEvery(SET_TODOS_ASYNC, fetchTodosAsync);
}

// Create
export function* createTodoAsync(action: SetTodoAsyncActionType) {
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

export function* handleCreateTodo() {
  yield takeEvery(SET_TODO_ASYNC, createTodoAsync);
}

// Update
export function* updateTodoAsync(action: UpdateTodoAsyncActionType) {
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

export function* handleUpdateTodo() {
  yield takeEvery(UPDATE_TODO_ASYNC, updateTodoAsync);
}

// Delete
export function* deleteTodoAsync(action: DeleteTodoAsyncActionType) {
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

export function* handleDeleteTodo() {
  yield takeEvery(DELETE_TODO_ASYNC, deleteTodoAsync);
}
