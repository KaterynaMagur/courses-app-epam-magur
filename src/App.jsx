import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { useState } from 'react';
import { mockedAuthorsList, mockedCoursesList } from './constants';

const App = () => {
	const [authorsList, setAuthors] = useState(mockedAuthorsList);
	const [coursesList, setCourses] = useState(mockedCoursesList);

	const createNewAuthor = (name) => {
		const author = {
			id: uuidv4(),
			name: name,
		};

		setAuthors([...authorsList, author]);
	};

	return (
		<div>
			<Header />
			<Courses authorsList={authorsList} coursesList={coursesList} />
			<CreateCourse
				createNewAuthor={createNewAuthor}
				authorsList={authorsList}
			/>
		</div>
	);
};

export default App;
