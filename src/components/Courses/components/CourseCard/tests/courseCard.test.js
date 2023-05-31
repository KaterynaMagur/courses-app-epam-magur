import axios from 'axios';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CourseCard } from '../CourseCard';
import {
	mockedState,
	renderTestHelper,
} from '../../../../../tests/renderTestHelper';

jest.mock('axios');

describe('check render header', () => {
	beforeEach(() => {
		axios.get.mockResolvedValue({ data: {} });
	});

	const course = mockedState.courses[1];
	const authorsList = mockedState.authors;
	const authors = authorsList
		.filter((author) => course.authors.includes(author.id))
		.map((author) => author.name)
		.join(', ');

	it('display title', () => {
		renderTestHelper(<CourseCard course={course} />);
		expect(screen.getByText(course.title)).toBeInTheDocument();
	});

	it('display description', () => {
		renderTestHelper(<CourseCard course={course} />);
		expect(screen.getByText(course.description)).toBeInTheDocument();
	});

	it('display duration in the correct format', () => {
		renderTestHelper(<CourseCard course={course} />);
		expect(screen.getByText(course.duration)).toBeInTheDocument();
	});

	it('display authors list', () => {
		renderTestHelper(<CourseCard course={course} />);
		expect(screen.getByText(authors)).toBeInTheDocument();
	});

	it('display created date', () => {
		renderTestHelper(<CourseCard course={course} />);
		expect(screen.getByText(course.creationDate)).toBeInTheDocument();
	});
});
