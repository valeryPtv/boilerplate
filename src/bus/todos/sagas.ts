import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './api';
import {
  SET_TODOS_ASYNC,
  SetTodoActionType,
  SET_TODO_ASYNC,
  UpdateTodoActionType,
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
export function* createTodoAsync(action: SetTodoActionType) {
  try {
    yield put(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
    // TODO: remove any
    const todo = yield call<any>(createTodo, action.payload);
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
export function* updateTodoAsync(action: UpdateTodoActionType) {
  try {
    yield put(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
    // TODO: remove any
    const todo = yield call<any>(updateTodo, action.payload);
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
    // TODO: remove any
    const wasDeleted = yield call<any>(deleteTodo, action.payload);
    console.log('wasDeleted', wasDeleted, action);
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
