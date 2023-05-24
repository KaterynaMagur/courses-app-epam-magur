import axios from 'axios';

const user = {
	login: (email, password) => axios.post('/login', { email, password }),
	register: (user) => axios.post('/register', user),
	logout: () => axios.delete('/logout'),
	me: () => axios.get('/users/me'),
};
const courses = {
	getAllCourses: () => axios.get('/courses/all'),
	addCourse: (course) => axios.post('/courses/add', course),
	deleteCourse: (courseId) => axios.delete(`/courses/${courseId}`),
	updateCourse: (course) => axios.put(`/courses/${course.id}`, course),
};
const authors = {
	getAllAuthors: () => axios.get('/authors/all'),
	addAuthor: (name) => axios.post('/authors/add', { name }),
};

export const api = {
	user,
	courses,
	authors,
};
