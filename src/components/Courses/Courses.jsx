import { CourseCard } from './components/CourseCard/CourseCard';
import { Button } from '../../common/Button/Button';
import styles from './Courses.module.scss';
import { SearchBar } from './components/SearchBar/SearchBar';
import { useState } from 'react';

export const Courses = ({ onAddNewCourse, authorsList, coursesList }) => {
	const [search, setSearch] = useState('');

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
