import axios from 'axios';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '../Header';
import { renderTestHelper } from '../../../constants';

jest.mock('axios');

describe('check render header', () => {
	beforeEach(() => {
		axios.get.mockResolvedValue({ data: {} });
	});

	it('shows logo', () => {
		renderTestHelper(<Header />);
		expect(screen.getByAltText('logo')).toBeInTheDocument();
	});

	test('check username', () => {
		renderTestHelper(<Header />);
		expect(screen.getByText('Test Name')).toBeInTheDocument();
	});
});
