// Core
import { queryCache, useMutation, useQuery } from 'react-query';

// Api
import { createTodo, deleteTodo, fetchTodos, updateTodo } from './api';

// Types
import { CreateTodoInput, DeleteTodoInput, Todos, UpdateTodoInput } from './types';

export const useTodosQuery = () => {
  return useQuery('todos', fetchTodos);
};

export const useCreateTodo = () => {
  return useMutation((input: CreateTodoInput) => createTodo(input), {
    onSuccess: (createdTodo) => {
      const previousTodos: Todos | undefined = queryCache.getQueryData('todos');

      if (previousTodos) {
        queryCache.setQueryData('todos', () => [ createdTodo, ...previousTodos ]);
      }
    },
  });
};

export const useUpdateTodo = () => {
  return useMutation((input: UpdateTodoInput) => updateTodo(input), {
    onSuccess: (updatedTodo) => {
      const previousTodos: Todos | undefined = queryCache.getQueryData('todos');

      if (previousTodos) {
        queryCache.setQueryData('todos', () => previousTodos.map((todo) => {
          if (todo.id === updatedTodo.id) {
            return updatedTodo;
          }

          return todo;
        }));
      }
    },
  });
};

export const useDeleteTodo = () => {
  return useMutation((input: DeleteTodoInput) => deleteTodo(input), {
    onSuccess: (isTodoDeleted, { todoId }) => {
      if (!isTodoDeleted) {
        throw new Error('Todo delete failed.');
      }

      const previousTodos: Todos | undefined = queryCache.getQueryData('todos');
      if (previousTodos) {
        queryCache.setQueryData('todos', () => previousTodos.filter(
          (todo) => todo.id !== todoId,
        ));
      }
    },
  });
};
