import { mockedCoursesList } from '../../constants';
import { CourseCard } from './components/CourseCard/CourseCard';
import { Button } from '../../common/Button/Button';
import styles from './Courses.module.scss';
import { SearchBar } from './components/SearchBar/SearchBar';

export const Courses = () => {
	return (
		<div className={styles.mainContent}>
			<div className={styles.controlDiv}>
				<SearchBar />
				<Button primary>Add new course</Button>
			</div>
			{mockedCoursesList.map((course) => (
				<CourseCard course={course} key={course.id} />
			))}
		</div>
	);
};
