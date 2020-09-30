// Core
import { all, call } from 'redux-saga/effects';
import {
  handleFetchTodos,
  handleCreateTodo,
  handleUpdateTodo,
  handleDeleteTodo,
} from '../../bus/todos/sagas';

// watch sagas
export function* rootSaga() {
  yield all([
    call(handleFetchTodos),
    call(handleCreateTodo),
    call(handleUpdateTodo),
    call(handleDeleteTodo),
  ]);
}
