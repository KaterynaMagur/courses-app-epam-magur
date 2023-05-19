import { Button } from '../../../../common/Button/Button';
import { useMemo } from 'react';
import styles from './CourseCard.module.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthors } from '../../../../store';

export const CourseCard = ({ course }) => {
	const authorsList = useSelector(selectAuthors);

	const authors = useMemo(() => {
		return authorsList
			.filter((author) => course.authors.includes(author.id))
			.map((author) => author.name)
			.join(', ');
	}, [course, authorsList]);

	const navigate = useNavigate();

	const showCourse = () => {
		navigate(course.id);
	};

	return (
		<div>
			<div className={styles.card}>
				<div>
					<h2 className={styles.h2}>{course.title}</h2>
					<div className={styles.description}>{course.description}</div>
				</div>
				<div className={styles.rightBlock}>
					<div className={styles.threeDots}>
						<span className='typography--bold'>Authors: </span>
						{authors}
					</div>
					<div>
						<span className='typography--bold'>Duration: </span>
						{course.duration}
					</div>
					<div>
						<span className='typography--bold'>Created: </span>
						{course.creationDate}
					</div>
					<div className={styles.button}>
						<Button secondary small onClick={showCourse}>
							Show course
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
