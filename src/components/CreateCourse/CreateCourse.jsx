import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { TextArea } from '../../common/Textarea/TextArea';
import styles from './CreateCourse.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { Authors } from './components/Authors/Authors';
import { CourseAuthors } from './components/CourseAuthors/CourseAuthors';
import { AddAuthor } from './components/AddAuthor/AddAuthor';
import { Duration } from './components/Duration/Duration';
import { useNavigate } from 'react-router-dom';

export const CreateCourse = () => {
	const [selectedAuthors, setSelectedAuthors] = useState([]);
	const [minutes, setMinutes] = useState(0);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const navigate = useNavigate();

	const clearState = useCallback(() => {
		setTitle('');
		setDescription('');
		setMinutes(0);
		setSelectedAuthors([]);
	}, []);

	useEffect(() => {
		clearState();
	}, [clearState]);
	const addAuthor = (id) => {
		setSelectedAuthors([...selectedAuthors, id]);
	};

	const deleteAuthor = (id) => {
		setSelectedAuthors(selectedAuthors.filter((author) => author !== id));
	};

	const handleInputTitleChange = ({ target: { value } }) => {
		setTitle(value);
	};

	const handleInputDescriptionChange = ({ target: { value } }) => {
		setDescription(value);
	};

	const handleCreateCourse = () => {
		if (!minutes || !title || !description || !selectedAuthors.length) {
			return alert('Please, fill in all fields');
		}
		// createNewCourse(title, description, minutes, selectedAuthors);
		clearState();
		navigate('/courses');
	};

	return (
		<div className={styles.main}>
			<div className={styles.inputLine}>
				<Input
					labelText='Title'
					placeholderText='Enter title...'
					value={title}
					onChange={handleInputTitleChange}
				/>
				<Button primary onClick={handleCreateCourse}>
					Create course
				</Button>
			</div>
			<TextArea
				labelText='Description'
				placeholderText='Enter description'
				value={description}
				onChange={handleInputDescriptionChange}
			/>
			<div className={styles.row}>
				<div className={styles.column}>
					<AddAuthor />
					<Duration onMinutesChange={setMinutes} minutes={minutes} />
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
