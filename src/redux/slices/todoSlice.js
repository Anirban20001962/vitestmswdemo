import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addToDo: {
			reducer: (state, action) => {
				state.push(action.payload);
			},

			prepare: (text) => {
				const id = nanoid();
				return { payload: { id, text } };
			},
		},
	},
});
export const { addToDo } = todoSlice.actions;
export default todoSlice.reducer;
