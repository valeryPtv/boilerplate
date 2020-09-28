// Core
import React, { FC, useRef, useState } from 'react';

// Components
import { ErrorBoundary, Todo } from '../../components';

// Redux
import { useTogglersRedux } from '../../bus/client/togglers';

// Todos Hooks
import { useFetchTodos, useTodosCrud } from '../../bus/todos';

// Elements
import { Button, Spinner } from '../../elements';

// Styles
import { Container, Header } from './styles';

const Main: FC = () => {
  const [ text, setText ] = useState<string>('');
  const headerRef = useRef<HTMLElement>(null);
  const { togglersRedux: { isOnline }} = useTogglersRedux();

  const { todos: data, isLoading: isTodosLoading } = useFetchTodos();
  const { createTodo, updateTodo, deleteTodo, isLoading: isTodosCrudLoading } = useTodosCrud();

  const isLoading = isTodosLoading || isTodosCrudLoading;

  if (!data || isLoading) {
    return <Spinner />;
  }

  const onCreate = () => {
    if (text !== '') {
      createTodo({ body: { text }});
      setText('');
    }
  };

  return (
    <Container>
      {false && <Spinner absolute />}
      <Header ref={headerRef}>
        <nav />
        <input
          value={text}
          onChange={(event) => void setText(event.target.value)}
        />
        <nav>
          <Button
            disabled={!isOnline}
            title='Create TODO'
            onClick={onCreate}>
            CREATE
          </Button>
        </nav>
      </Header>
      <main>
        {
          data.map((todo, index) => (
            <Todo
              isColor={Boolean(index % 2)}
              key={todo.id}
              {...todo}
              deleteHandler={() => void deleteTodo({ todoId: todo.id })}
              updateHandler={() => void updateTodo({
                todoId: todo.id,
                body:   { isCompleted: !todo.isCompleted },
              })}
            />
          ))
        }
      </main>
    </Container>
  );
};

export default () => (
  <ErrorBoundary>
    <Main />
  </ErrorBoundary>
);
