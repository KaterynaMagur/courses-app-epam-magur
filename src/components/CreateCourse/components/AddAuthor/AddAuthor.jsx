import { Button } from '../../../../common/Button/Button';
import styles from '../../CreateCourse.module.scss';
import { Input } from '../../../../common/Input/Input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { api } from '../../../../servisces';
import { addAuthor } from '../../../../store/authors/actionCreators';

export const AddAuthor = () => {
	const [newAuthorName, setNewAuthorName] = useState('');
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const handleInputChange = ({ target: { value } }) => {
		setNewAuthorName(value);
	};

	const handleAddAuthor = () => {
		setLoading(true);
		api.authors
			.addAuthor(newAuthorName)
			.then((response) => {
				dispatch(addAuthor(response.data.result));
			})
			.catch((err) => {
				alert(err.response.data.message);
			})
			.finally(() => {
				setLoading(false);
			});
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
				<Button
					disabled={loading || !newAuthorName}
					onClick={handleAddAuthor}
					secondary
				>
					Create author
				</Button>
			</div>
		</div>
	);
};
