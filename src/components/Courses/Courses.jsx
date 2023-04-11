import { mockedCoursesList } from '../../constants';
import { CourseCard } from './components/CourseCard/CourseCard';
import { Button } from '../../common/Button/Button';
import styles from './Courses.module.scss';

export const Courses = () => {
	return (
		<div>
			<Button primary>Add new course</Button>
			{mockedCoursesList.map((course) => (
				<CourseCard course={course} key={course.id} />
			))}
		</div>
	);
};
