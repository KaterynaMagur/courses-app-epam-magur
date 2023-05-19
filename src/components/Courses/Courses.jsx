import { CourseCard } from './components/CourseCard/CourseCard';
import { Button } from '../../common/Button/Button';
import styles from './Courses.module.scss';
import { SearchBar } from './components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCourses, selectUser } from '../../store';
import { api } from '../../servisces';
import { setCourses } from '../../store/courses/actionCreators';

export const Courses = ({ onAddNewCourse, authorsList }) => {
	const [search, setSearch] = useState('');
	const coursesList = useSelector(selectCourses);
	const currentUser = useSelector(selectUser);

	const dispatch = useDispatch();

	useEffect(() => {
		if (currentUser.isAuth) {
			api.courses.getAllCourses().then((response) => {
				dispatch(setCourses(response.data.result));
			});
		}
	}, [currentUser, dispatch]);

	return (
		<div className={styles.mainContent}>
			<div className={styles.controlDiv}>
				<SearchBar onSearch={setSearch} />
				<Button primary onClick={onAddNewCourse}>
					Add new course
				</Button>
			</div>
			{coursesList
				.filter(
					(course) =>
						course.title.toLowerCase().search(search) !== -1 ||
						course.id.search(search) !== -1
				)

				.map((course) => (
					<CourseCard
						authorsList={authorsList}
						course={course}
						key={course.id}
					/>
				))}
		</div>
	);
};
