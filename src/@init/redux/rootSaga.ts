// Core
import { all, call } from 'redux-saga/effects';
import {
  watchFetchTodos,
  watchTodoWorker,
  watchUpdateTodo,
  watchDeleteTodo,
} from '../../bus/todos/saga';

// watch sagas
export function* rootSaga() {
  yield all([
    call(watchFetchTodos),
    call(watchTodoWorker),
    call(watchUpdateTodo),
    call(watchDeleteTodo),
  ]);
}
