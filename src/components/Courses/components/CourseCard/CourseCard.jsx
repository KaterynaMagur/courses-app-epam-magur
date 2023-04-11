import { Button } from '../../../../common/Button/Button';
import { mockedAuthorsList } from '../../../../constants';
import { useMemo } from 'react';
import styles from './CourseCard.module.scss';

export const CourseCard = ({ course }) => {
	const authors = useMemo(() => {
		return mockedAuthorsList
			.filter((author) => course.authors.includes(author.id))
			.map((author) => author.name)
			.join(', ');
	}, [course]);

	return (
		<div>
			<div className={styles.card}>
				<div className={styles.leftBlock}>
					<h2 className={styles.h2}>{course.title}</h2>
					<div className={styles.description}>{course.description}</div>
				</div>
				<div className={styles.rightBlock}>
					<div>
						<span className={styles.boldText}>Authors: </span>
						{authors}
					</div>
					<div>
						<span className={styles.boldText}>Duration: </span>
						{course.duration}
					</div>
					<div>
						<span className={styles.boldText}>Created: </span>
						{course.creationDate}
					</div>
					<div className={styles.button}>
						<Button secondary>Show course</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
