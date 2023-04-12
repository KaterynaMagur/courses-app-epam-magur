import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';

const App = () => {
	return (
		<div>
			<Header />
			<Courses />
			<CreateCourse />
		</div>
	);
};

export default App;
