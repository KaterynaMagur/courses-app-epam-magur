import { Button } from '../../../../common/Button/Button';
import styles from '../../CourseForm.module.scss';
import { Input } from '../../../../common/Input/Input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { api } from '../../../../servisces';
import { addAuthor } from '../../../../store/authors/actionCreators';

import { v4 as uuidv4 } from 'uuid';
import { addAuthorThunk } from '../../../../store/authors/thunk';

export const AddAuthor = () => {
	const [newAuthorName, setNewAuthorName] = useState('');
	const dispatch = useDispatch();
	const handleInputChange = ({ target: { value } }) => {
		setNewAuthorName(value);
	};

	const handleAddAuthor = () => {
		dispatch(addAuthorThunk(newAuthorName));
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
				<Button disabled={!newAuthorName} onClick={handleAddAuthor} secondary>
					Create author
				</Button>
			</div>
		</div>
	);
};
