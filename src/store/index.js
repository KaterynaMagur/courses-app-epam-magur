import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/reducer';
import { authorsReducer } from './authors/reducer';
import { coursesReducer } from './courses/reducer';

export const store = configureStore({
	reducer: {
		user: userReducer,
		courses: coursesReducer,
		authors: authorsReducer,
	},
});

export const selectCourses = (state) => state.courses;
export const selectUser = (state) => state.user;

export const selectAuthors = (state) => state.authors;
