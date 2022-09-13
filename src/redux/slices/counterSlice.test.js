import { expect, test } from 'vitest';
import reducer, {
	decrement,
	increment,
	incrementByAmount,
} from './counterSlice';

test('should return the intial state', () => {
	expect(reducer(undefined, { type: undefined })).toEqual({
		value: 0,
		loading: false,
	});
});

test('testing the addition action', () => {
	const initialState = { value: 6 };
	expect(reducer(initialState, increment())).toEqual({ value: 7 });
});

test('testing the subtraction action', () => {
	expect(reducer(undefined, decrement())).toEqual({
		value: -1,
		loading: false,
	});
});

test('testing the addition by some value', () => {
	const intialState = { value: 6 };
	expect(reducer(intialState, incrementByAmount(5))).toEqual({ value: 11 });
});
