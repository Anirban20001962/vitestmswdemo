import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';
import { setupStore } from '../redux/Store';
import { Provider } from 'react-redux';

afterEach(() => {
	cleanup();
});

const customRender = (
	ui,
	{ preloadedState = {}, store = setupStore(preloadedState), ...options }
) => {
	render(ui, {
		wrapper: ({ children }) => (
			<Provider store={store}>{children}</Provider>
		),
		...options,
	});
};

export * from '@testing-library/react';

export { customRender as render };
