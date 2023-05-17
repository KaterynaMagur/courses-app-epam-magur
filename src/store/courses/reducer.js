import { createReducer } from '@reduxjs/toolkit/src';
import {
	addNewCourse,
	deleteCourse,
	setCourses,
	updateCourse,
} from './actionCreators';

const initialState = [];
export const coursesReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(setCourses, (state, action) => {
			return [...action.payload];
		})
		.addCase(updateCourse, (state, action) => {
			return state.map((course) => {
				if (course.id === action.payload.id) {
					return { ...action.payload };
				}
				return course;
			});
		})
		.addCase(deleteCourse, (state, action) => {
			return state.filter((course) => course.id !== action.payload);
		})
		.addCase(addNewCourse, (state, action) => {
			return [action.payload, ...state];
		});
});
