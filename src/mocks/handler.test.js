import { describe, test } from 'vitest';
import fetch from 'node-fetch';

describe('checking msw setup is sucessfull or not', () => {
	test('post login check', async () => {
		const res = await fetch('https://anirban.netstorm.in/status');
		const data = await res.json();

		expect(data).toEqual({ message: 'hello world' });
		expect(res.status).toBe(200);
	});
});
