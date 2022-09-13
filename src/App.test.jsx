import { describe, it } from 'vitest';
import { render } from './utils/test-utils';

import App from './App';

describe('App', () => {
	it('renders App component', () => {
		render(<App />, {});
	});
});
