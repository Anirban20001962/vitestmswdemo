import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const checkHttpReq = createAsyncThunk(
	'counter/checkHttpReq',
	async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
		return res.json();
	}
);

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0,
		loading: false,
	},

	reducers: {
		increment: (state) => {
			state.value += 1;
		},

		decrement: (state) => {
			state.value -= 1;
		},

		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(checkHttpReq.fulfilled, (state, _) => {
			console.log('fulfilled');
			state.loading = false;
		});

		builder.addCase(checkHttpReq.pending, (state) => {
			console.log('pending');
			state.loading = true;
		});

		builder.addCase(checkHttpReq.rejected, (state) => {
			console.log('rejected');
			state.loading = false;
		});
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
