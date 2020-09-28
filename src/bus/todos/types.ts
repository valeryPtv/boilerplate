export type Todo = {
  id: string
  text: string
  isCompleted: boolean
};

export type Todos = Array<Todo>;

export type FetchTodos = () => Promise<Todos>;

// Create
export type CreateTodoInput = {
  body: {
    text: string
  }
};
export type CreateTodoType = (input: CreateTodoInput) => Promise<Todo>;

// Update
export type UpdateTodoInput = {
  todoId: string
  body: {
    isCompleted: boolean
  }
};
export type UpdateTodo = (input: UpdateTodoInput) => Promise<Todo>;

// Delete
export type DeleteTodoInput = {
  todoId: string
};
export type DeleteTodo = (input: DeleteTodoInput) => Promise<boolean>;


// Redux stuff
export const SET_TODOS_IS_LOADING = 'SET_TODOS_IS_LOADING';
type SetIsTodosLoadingAction = {
  type: typeof SET_TODOS_IS_LOADING,
  payload: boolean,
};
export type SetIsTodosLoadingCreatorAction = (isLoading: boolean) => SetIsTodosLoadingAction;

export const FETCH_TODOS = 'FETCH_TODOS';
type FetchTodosAction = {
  type: typeof FETCH_TODOS
  payload: Todos
};
export type FetchTodosCreatorAction = (todos: Todos) => FetchTodosAction

export const CREATE_TODO = 'CREATE_TODO';
type CreateTodoAction = {
  type: typeof CREATE_TODO
  payload: Todo,
};
export type CreateTodoCreatorAction = (text: Todo) => CreateTodoAction

export const UPDATE_TODO = 'UPDATE_TODO';
type UpdateTodoAction = {
  type: typeof UPDATE_TODO
  payload: Todo
};
export type UpdateTodoCreatorAction = (todo: Todo) => UpdateTodoAction;

export const DELETE_TODO = 'DELETE_TODO';
type DeleteTodoAction = {
  type: typeof DELETE_TODO
  payload: DeleteTodoInput
};
export type DeleteTodoCreatorAction = (todoToDelete: DeleteTodoInput) => DeleteTodoAction;

export type TodosActions =
  | SetIsTodosLoadingAction
  | FetchTodosAction
  | CreateTodoAction
  | UpdateTodoAction
  | DeleteTodoAction

export type Dispatch = <ActionT>(action: ActionT) => void;
export type TodoRequest = (dispatch: Dispatch) => void;
