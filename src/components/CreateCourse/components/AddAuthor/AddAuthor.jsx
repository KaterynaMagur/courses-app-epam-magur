import { Button } from '../../../../common/Button/Button';
import styles from '../../CreateCourse.module.scss';
import { Input } from '../../../../common/Input/Input';
import { useState } from 'react';

export const AddAuthor = ({ createNewAuthor }) => {
	const [newAuthorName, setNewAuthorName] = useState('');
	const handleInputChange = ({ target: { value } }) => {
		setNewAuthorName(value);
	};

	return (
		<div className={styles.addAuthorDiv}>
			<h3 className={styles.h3}>Add author</h3>
			<Input
				onChange={handleInputChange}
				labelText='Author name'
				placeholderText='Enter Author name'
			/>
			<div className={styles.buttonDiv}>
				<Button onClick={() => createNewAuthor(newAuthorName)} secondary>
					Create author
				</Button>
			</div>
		</div>
	);
};
