import { Button } from '../../../../common/Button/Button';
import { useMemo } from 'react';
import styles from './CourseCard.module.scss';

export const CourseCard = ({ course, authorsList }) => {
	const authors = useMemo(() => {
		return authorsList
			.filter((author) => course.authors.includes(author.id))
			.map((author) => author.name)
			.join(', ');
	}, [course, authorsList]);

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
						<Button secondary small>
							Show course
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
