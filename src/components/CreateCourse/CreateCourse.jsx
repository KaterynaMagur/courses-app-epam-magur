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
	const [min, setMinutes] = useState(0);

	const addAuthor = (id) => {
		setSelectedAuthors([...selectedAuthors, id]);
	};

	const deleteAuthor = (id) => {
		setSelectedAuthors(selectedAuthors.filter((author) => author !== id));
	};

	const handleInputChange = ({ target: { value } }) => {
		setMinutes(value);
	};
	function padTo2Digits(num) {
		return num.toString().padStart(2, '0');
	}

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
							min='0'
							type='number'
							labelText='Duration'
							placeholderText='Enter duration in minutes'
							onChange={handleInputChange}
						/>
						<div className={styles.durationCounter}>
							Duration:{' '}
							<span className='typography--bold typography--extra-large'>
								{padTo2Digits(Math.floor(min / 60))} : {padTo2Digits(min % 60)}
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
