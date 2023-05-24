import { CourseCard } from './components/CourseCard/CourseCard';
import { Button } from '../../common/Button/Button';
import styles from './Courses.module.scss';
import { SearchBar } from './components/SearchBar/SearchBar';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCourses, selectUser } from '../../store';
import { useNavigate } from 'react-router-dom';
import { ADMIN } from '../../constants';

export const Courses = () => {
	const [search, setSearch] = useState('');
	const coursesList = useSelector(selectCourses);
	const navigate = useNavigate();
	const user = useSelector(selectUser);

	return (
		<div className={styles.mainContent}>
			<div className={styles.controlDiv}>
				<SearchBar onSearch={setSearch} />
				{user.role === ADMIN ? (
					<Button primary onClick={() => navigate('/courses/add')}>
						Add new course
					</Button>
				) : null}
			</div>
			{coursesList
				.filter(
					(course) =>
						course.title.toLowerCase().search(search) !== -1 ||
						course.id.search(search) !== -1
				)

				.map((course) => (
					<CourseCard course={course} key={course.id} />
				))}
		</div>
	);
};
