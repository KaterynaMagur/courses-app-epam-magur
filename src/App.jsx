import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';

import { useState } from 'react';

import { mockedAuthorsList, mockedCoursesList } from './constants';

import { getCurrentDate } from './helpers/dateGeneratop';

import { Route, Routes } from 'react-router-dom';
import { Registration } from './components/Registration/Registration';
import { Login } from './components/Login/Login';
import { CourseInfo } from './components/CourseInfo/CourseInfo';

const App = () => {
	const [authorsList, setAuthors] = useState(mockedAuthorsList);
	const [coursesList, setCourses] = useState(mockedCoursesList);
	const [isNewCourseOpen, setNewCourseOpen] = useState(false);

	const createNewAuthor = (name) => {
		const author = {
			id: uuidv4(),
			name: name,
		};

		setAuthors([...authorsList, author]);
	};

	const createNewCourse = (title, description, duration, authors) => {
		const course = {
			id: uuidv4(),
			title: title,
			description: description,
			creationDate: getCurrentDate(),
			duration: duration,
			authors: authors,
		};

		setCourses([...coursesList, course]);
		setNewCourseOpen(false);
	};

	return (
		<div>
			<Header />
			<Routes>
				<Route
					path='/courses'
					element={
						<Courses
							onAddNewCourse={() => setNewCourseOpen(true)}
							authorsList={authorsList}
							coursesList={coursesList}
						/>
					}
				></Route>
				<Route
					path='/courses/add'
					element={
						<CreateCourse
							createNewAuthor={createNewAuthor}
							createNewCourse={createNewCourse}
							authorsList={authorsList}
						/>
					}
				></Route>
				<Route path='/registration' element={<Registration />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/courses/:courseId' element={<CourseInfo />}></Route>
			</Routes>
		</div>
	);
};

export default App;
