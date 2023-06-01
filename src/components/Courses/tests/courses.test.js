import axios from 'axios';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mockedState, renderTestHelper } from '../../../tests/renderTestHelper';
import { Courses } from '../Courses';
import { CourseForm } from '../../CourseForm/CourseForm';
import { ADD_NEW_COURSE_BUTTON } from '../../../constants';

jest.mock('axios');

describe('check render courses', () => {
	beforeEach(() => {
		axios.get.mockResolvedValue({ data: {} });
	});

	it('display amount of CourseCard equal length of courses array', async () => {
		renderTestHelper(<Courses />);
		const courses = await screen.findAllByTestId('course-card');
		expect(courses.length).toBe(mockedState.courses.length);
	});

	it('display Empty container is courses array length is 0', async () => {
		const state = {
			courses: [],
		};
		renderTestHelper(<Courses />, state);

		const parent = await screen.getByTestId('course-container');

		expect(parent).toBeEmptyDOMElement();
	});

	it('show CourseForm after a click on a button Add new course', async () => {
		renderTestHelper(<Courses />);
		renderTestHelper(<CourseForm />);

		const button = screen.getByRole('button', {
			name: ADD_NEW_COURSE_BUTTON,
			hidden: true,
		});

		fireEvent.click(button);

		expect(screen.getByTestId('course-form-container')).toBeInTheDocument();
	});
});
