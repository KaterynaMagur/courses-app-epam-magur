import {
	SET_COURSES,
	DELETE_COURSE,
	UPDATE_COURSE,
	ADD_COURSE,
} from './actionTypes';
import { createAction } from '@reduxjs/toolkit';

export const setCourses = createAction(SET_COURSES);

export const updateCourse = createAction(UPDATE_COURSE);

export const deleteCourse = createAction(DELETE_COURSE);

export const addNewCourse = createAction(ADD_COURSE);
