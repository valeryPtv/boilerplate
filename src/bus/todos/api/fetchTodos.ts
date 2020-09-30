// Types
import { FetchTodos } from './types';
import { Todos } from '../types';

// Constants
import { API_URL } from '../../../@init/constants';

export const fetchTodos: FetchTodos = async () => {
  const response = await fetch(`${API_URL}/todos`, {
    method:  'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status !== 200) {
    throw new Error('Todos fetch failed');
  }

  const data: Todos = await response.json();

  return data;
};
