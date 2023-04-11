import { Button } from '../../../../common/Button/Button';
import { mockedAuthorsList } from '../../../../constants';
import { useMemo } from 'react';

export const CourseCard = ({ course }) => {
	const authors = useMemo(() => {
		return mockedAuthorsList
			.filter((author) => course.authors.includes(author.id))
			.map((author) => author.name)
			.join(', ');
	}, [course]);

	return (
		<div>
			<div>
				<div>
					<h2>{course.title}</h2>
					<div>{course.description}</div>
				</div>
				<div>
					<div>Authors: {authors}</div>
					<div>Duration: {course.duration}</div>
					<div>Created: {course.creationDate}</div>
				</div>
				<Button secondary>Show course</Button>
			</div>
		</div>
	);
};
