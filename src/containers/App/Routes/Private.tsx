// Core
import React, { FC, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';

// Pages
import { Main } from '../../../pages';

export const Private: FC = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.match(/login|register/)) {
      push('/');
    }
  });

  return (
    <Switch>
      <Route
        exact
        path='/'>
        <Main />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
};
