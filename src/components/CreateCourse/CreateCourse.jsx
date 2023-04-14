import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { TextArea } from '../../common/Textarea/TextArea';
import styles from './CreateCourse.module.scss';
import { useState } from 'react';
import { Authors } from './components/Authors/Authors';
import { CourseAuthors } from './components/CourseAuthors/CourseAuthors';
import { AddAuthor } from './components/AddAuthor/AddAuthor';

export const CreateCourse = ({ authorsList, createNewAuthor }) => {
	const [selectedAuthors, setSelectedAuthors] = useState([]);

	const addAuthor = (id) => {
		setSelectedAuthors([...selectedAuthors, id]);
	};

	const deleteAuthor = (id) => {
		setSelectedAuthors(selectedAuthors.filter((author) => author !== id));
	};

	return (
		<div className={styles.main}>
			<div className={styles.inputLine}>
				<Input labelText='Title' placeholderText='Enter title...' />
				<Button primary>Create course</Button>
			</div>
			<TextArea labelText='Description' placeholderText='Enter description' />
			<div className={styles.row}>
				<div className={styles.column}>
					<AddAuthor createNewAuthor={createNewAuthor} />
					<div className={styles.durationDiv}>
						<h3 className={styles.h3}>Duration</h3>
						<Input
							labelText='Duration'
							placeholderText='Enter duration in minutes'
						/>
						<div className={styles.durationCounter}>
							Duration:{' '}
							<span className='typography--bold typography--extra-large'>
								00:00
							</span>{' '}
							hours
						</div>
					</div>
				</div>
				<div className={styles.column}>
					<Authors
						authorsList={authorsList}
						addAuthor={addAuthor}
						selectedAuthors={selectedAuthors}
					/>
					<CourseAuthors
						authorsList={authorsList}
						selectedAuthors={selectedAuthors}
						deleteAuthor={deleteAuthor}
					/>
				</div>
			</div>
		</div>
	);
};
