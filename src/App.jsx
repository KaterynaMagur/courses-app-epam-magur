import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { DefaultPage } from './components/DefaultPage/DefaultPage';

import { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Registration } from './components/Registration/Registration';
import { Login } from './components/Login/Login';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './store/user/actionCreators';
import { api } from './servisces';
import { setCourses } from './store/courses/actionCreators';
import { setAuthors } from './store/authors/actionCreators';
import { selectUser } from './store';

axios.defaults.baseURL = 'http://localhost:4000';
axios.interceptors.request.use((config) => {
	if (!['/login', '/register'].includes(config.url)) {
		config.headers.Authorization = localStorage.getItem('token') || '';
	}
	return config;
});

const App = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectUser);

	useEffect(() => {
		const user = localStorage.getItem('userData');
		if (user) {
			dispatch(setUser(JSON.parse(user)));
		}
	}, [dispatch]);

	useEffect(() => {
		if (currentUser.isAuth) {
			api.courses.getAllCourses().then((response) => {
				dispatch(setCourses(response.data.result));
			});
			api.authors.getAllAuthors().then((response) => {
				dispatch(setAuthors(response.data.result));
			});
		}
	}, [currentUser, dispatch]);

	return (
		<div>
			<Header />
			<Routes>
				<Route path='/courses' element={<Courses />}></Route>
				<Route path='/courses/add' element={<CreateCourse />}></Route>
				<Route path='/registration' element={<Registration />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/courses/:courseId' element={<CourseInfo />}></Route>
				<Route path='*' element={<DefaultPage />} />
			</Routes>
		</div>
	);
};

export default App;
