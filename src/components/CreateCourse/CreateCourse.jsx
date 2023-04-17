import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { TextArea } from '../../common/Textarea/TextArea';
import styles from './CreateCourse.module.scss';
import { useState } from 'react';
import { Authors } from './components/Authors/Authors';
import { CourseAuthors } from './components/CourseAuthors/CourseAuthors';
import { AddAuthor } from './components/AddAuthor/AddAuthor';
import { Duration } from './components/Duration/Duration';

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
					<Duration />
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
