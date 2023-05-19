import axios from 'axios';

const user = {
	login: (email, password) => axios.post('/login', { email, password }),
	register: (user) => axios.post('/register', user),
};
const courses = {
	getAllCourses: () => axios.get('/courses/all'),
	addCourse: (course) => axios.post('/courses/add', course),
	deleteCourse: (courseId) => axios.delete(`/courses/${courseId}`),
	updateCourse: (course) => axios.put(`/courses/${course.id}`, course),
};
const authors = {
	getAllAuthors: () => axios.get('/authors/all'),
	addAuthor: (author) => axios.post('/authors/add'),
};

export const api = {
	user,
	courses,
	authors,
};
