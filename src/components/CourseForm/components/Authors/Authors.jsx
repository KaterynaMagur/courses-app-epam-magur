import { Button } from '../../../../common/Button/Button';
import styles from '../../CourseForm.module.scss';
import { useSelector } from 'react-redux';
import { selectAuthors } from '../../../../store';

export const Authors = ({ addAuthor, selectedAuthors }) => {
	const authorsList = useSelector(selectAuthors);

	return (
		<div>
			<h3>Authors</h3>
			<div>
				{authorsList
					.filter((author) => !selectedAuthors.includes(author.id))
					.map((author) => (
						<div key={author.id} className={styles.addAuthorLines}>
							<p>{author.name}</p>
							<div>
								<Button secondary onClick={() => addAuthor(author.id)}>
									Add Author
								</Button>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};
