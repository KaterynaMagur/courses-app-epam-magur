import styles from '../../CourseForm.module.scss';
import { Button } from '../../../../common/Button/Button';
import { useSelector } from 'react-redux';
import { selectAuthors } from '../../../../store';

export const CourseAuthors = ({ selectedAuthors, deleteAuthor }) => {
	const authorsList = useSelector(selectAuthors);

	return (
		<div>
			<h3 className={styles.h3}>Course Authors</h3>
			<div>
				{authorsList
					.filter((author) => selectedAuthors.includes(author.id))
					.map((author) => (
						<div className={styles.addAuthorLines} key={author.id}>
							<p>{author.name}</p>
							<div className={styles.buttonDiv}>
								<Button secondary onClick={() => deleteAuthor(author.id)}>
									Delete Author
								</Button>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};
