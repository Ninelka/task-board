import { combineReducers, configureStore } from '@reduxjs/toolkit';
import taskSlice from './taskSlice';

const rootReducer = combineReducers({
  tasks: taskSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
