import { api } from '../../servisces';
import {
	addNewCourse,
	deleteCourse,
	setCourses,
	updateCourse,
} from './actionCreators';

export const loadCoursesThunk = () => async (dispatch) => {
	try {
		const res = await api.courses.getAllCourses();
		dispatch(setCourses(res.data.result));
	} catch (e) {}
};

export const deleteCourseThunk = (id) => async (dispatch) => {
	try {
		await api.courses.deleteCourse(id);
		dispatch(deleteCourse(id));
	} catch (e) {}
};

export const createCourse = (course) => async (dispatch) => {
	try {
		const res = await api.courses.addCourse(course);
		dispatch(addNewCourse(res.data.result));
	} catch (e) {}
};

export const updateCourseThunk = (course) => async (dispatch) => {
	try {
		const res = await api.courses.updateCourse(course);
		dispatch(updateCourse(res.data.result));
	} catch (e) {}
};
