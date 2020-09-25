// Core
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Reducers
import { togglersReducer as togglers } from '../../bus/client';

// Middlewares
import { middlewares } from './middlewares';

export const rootReducer = combineReducers({
  togglers,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
