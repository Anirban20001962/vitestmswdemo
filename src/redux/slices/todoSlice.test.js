import { test } from 'vitest';
import reducer, { addToDo } from './todoSlice';

test('checking default state', () => {
	expect(reducer(undefined, { type: undefined })).toEqual([]);
});

test('checking addToDo action', () => {
	const state = reducer(undefined, addToDo('Messi'));
	expect(state[0].text).toEqual('Messi');
	expect(state.length).toEqual(1);
});
