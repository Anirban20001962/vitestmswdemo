import { rest } from 'msw';

export const handlers = [
	rest.get('https://anirban.netstorm.in/status', (req, res, ctx) => {
		console.log('hello world');
		return res(
			ctx.status(200),
			ctx.json({
				message: 'hello world',
			})
		);
	}),
];
