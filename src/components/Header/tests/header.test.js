import axios from 'axios';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '../Header';
import { renderTestHelper } from '../../../tests/renderTestHelper';

jest.mock('axios');

describe('check render header', () => {
	beforeEach(() => {
		axios.get.mockResolvedValue({ data: {} });
	});

	it('shows logo', () => {
		renderTestHelper(<Header />);
		expect(screen.getByAltText('logo')).toBeInTheDocument();
	});

	it('check username', () => {
		renderTestHelper(<Header />);
		expect(screen.getByText('Test Name')).toBeInTheDocument();
	});
});
