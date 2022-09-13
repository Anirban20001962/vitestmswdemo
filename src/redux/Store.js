import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import todoSlice from './slices/todoSlice';

const rootReducer = combineReducers({
	counter: counterSlice,
	todoList: todoSlice,
});

export const setupStore = (preloadedState) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	});
};
