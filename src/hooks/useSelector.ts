import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import { AppState } from '../@init/redux';

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;
