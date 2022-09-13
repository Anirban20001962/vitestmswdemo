import '@testing-library/jest-dom';

import { server } from '../mocks/server';

beforeAll(() => server.listen());

afterAll(() => server.resetHandlers());

afterAll(() => server.close());
