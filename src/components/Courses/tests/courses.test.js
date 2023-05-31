import axios from 'axios';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mockedState, renderTestHelper } from '../../../tests/renderTestHelper';
import { Courses } from '../Courses';

jest.mock('axios');

describe('check render header', () => {
	beforeEach(() => {
		axios.get.mockResolvedValue({ data: {} });
	});

	it('display amount of CourseCard equal length of courses array', async () => {
		renderTestHelper(<Courses />);
		const courses = await screen.findAllByTestId('course-card');
		expect(courses.length).toBe(mockedState.courses.length);
	});
});
