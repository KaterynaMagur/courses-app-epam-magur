import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/reducer';
import { authorsReducer } from './authors/reducer';
import { coursesReducer } from './courses/reducer';

import thunk from 'redux-thunk';

export const store = configureStore({
	reducer: {
		user: userReducer,
		courses: coursesReducer,
		authors: authorsReducer,
	},
	middleware: [thunk],
});

export const selectCourses = (state) => state.courses;
export const selectUser = (state) => state.user;

export const selectAuthors = (state) => state.authors;
