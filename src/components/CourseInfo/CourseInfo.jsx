import { Link, useParams } from 'react-router-dom';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import { useMemo } from 'react';
import styles from './CourseInfo.module.scss';
import { padTo2Digits } from '../../helpers/pipeDuration';

const MINUTES_ONE_HOUR = 60;

export const CourseInfo = () => {
	const { courseId } = useParams();

	const course = useMemo(() => {
		return mockedCoursesList.find((course) => course.id === courseId);
	}, [courseId]);

	const authors = useMemo(() => {
		return mockedAuthorsList
			.filter((author) => course.authors.includes(author.id))
			.map((author) => author.name)
			.join(', ');
	}, [course]);

	return (
		<div className={styles.card}>
			<Link to='/courses'> &larr; Back to courses</Link>
			<h2 className={styles.title}>{course?.title}</h2>
			<div className={styles.infoPart}>
				<div>{course?.description}</div>
				<div className={styles.rightPart}>
					<div>
						<span className={styles.label}>ID:</span> {course?.id}
					</div>
					<div>
						<span className={styles.label}>Duration: </span>
						{padTo2Digits(Math.floor(course?.duration / MINUTES_ONE_HOUR))}:
						{padTo2Digits(course?.duration % MINUTES_ONE_HOUR)} hours
					</div>
					<div>
						<span className={styles.label}>Created:</span>{' '}
						{course?.creationDate}
					</div>
					<div>
						<span className={styles.label}>Authors:</span> {authors}
					</div>
				</div>
			</div>
		</div>
	);
};
