// Core
import React, { FC, useCallback, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

// Containers
import { TopBar } from '../TopBar';
import { Routes } from './Routes';

// Hooks
import { useLocalStorage } from '../../hooks';
import { useTogglersRedux } from '../../bus/client';

// Assets and Styles
import { defaultTheme, GlobalStyles } from '../../assets';
import { AppContainer } from './styles';

export const App: FC = () => {
  const { setTogglerAction } = useTogglersRedux();
  const [ isDefaultTheme ] = useLocalStorage('isDefaultTheme', true);

  const setOnlineStatusHanlder = useCallback(() => void setTogglerAction({
    type:  'isOnline',
    value: navigator.onLine,
  }), [ setTogglerAction ]);

  useEffect(() => {
    setOnlineStatusHanlder();
    window.addEventListener('online', setOnlineStatusHanlder);
    window.addEventListener('offline', setOnlineStatusHanlder);
  }, []);

  return (
    <ThemeProvider theme={isDefaultTheme ? defaultTheme : defaultTheme}>
      <GlobalStyles />
      <AppContainer>
        <TopBar />
        <Routes />
      </AppContainer>
    </ThemeProvider>
  );
};
