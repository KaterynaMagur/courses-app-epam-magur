import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { TextArea } from '../../common/Textarea/TextArea';
import styles from './CreateCourse.module.scss';
import { useState } from 'react';
import { Authors } from './components/Authors/Authors';
import { CourseAuthors } from './components/CourseAuthors/CourseAuthors';

export const CreateCourse = () => {
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
					<div className={styles.addAuthorDiv}>
						<h3 className={styles.h3}>Add author</h3>
						<Input
							labelText='Author name'
							placeholderText='Enter Author name'
						/>
						<div className={styles.buttonDiv}>
							<Button secondary>Create author</Button>
						</div>
					</div>
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
					<Authors addAuthor={addAuthor} selectedAuthors={selectedAuthors} />
					<CourseAuthors
						selectedAuthors={selectedAuthors}
						deleteAuthor={deleteAuthor}
					/>
				</div>
			</div>
		</div>
	);
};
