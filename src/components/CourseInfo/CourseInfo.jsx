import { Link, useParams } from 'react-router-dom';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import { useMemo } from 'react';

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
		<div>
			<Link to='/courses'> &larr; Back to courses</Link>
			<h2>{course?.title}</h2>
			<div>{course?.description}</div>
			<div>
				<div>{course?.id}</div>
				<div>{course?.duration}</div>
				<div>{course?.creationDate}</div>
				<div>{authors}</div>
			</div>
		</div>
	);
};
