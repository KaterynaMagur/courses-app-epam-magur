import styles from '../../CreateCourse.module.scss';
import { Button } from '../../../../common/Button/Button';

export const CourseAuthors = ({
	selectedAuthors,
	deleteAuthor,
	authorsList,
}) => {
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
