import { coursesReducer, initialState } from '../courses/reducer';
import { mockedCoursesList } from '../../constants';
import { ADD_COURSE, SET_COURSES } from '../courses/actionTypes';

describe('check render coursesReducer', () => {
	it('reducer return the initial state', () => {
		expect(coursesReducer(undefined, {})).toEqual(initialState);
	});

	it('reducer should handle SAVE_COURSE and returns new state', () => {
		const course = mockedCoursesList[0];
		const addCourseAction = {
			type: ADD_COURSE,
			payload: course,
		};
		const reduced = [addCourseAction].reduce(coursesReducer, undefined);
		expect(reduced).toEqual([course]);
	});

	it('reducer should handle GET_COURSES(SET_COURSES) and returns new state', () => {
		const state = [];
		const courses = mockedCoursesList;
		const setCoursesAction = {
			type: SET_COURSES,
			payload: courses,
		};
		expect(coursesReducer(state, setCoursesAction)).toEqual(courses);
	});
});
