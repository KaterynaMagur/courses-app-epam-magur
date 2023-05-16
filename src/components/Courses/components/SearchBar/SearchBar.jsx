import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';
import styles from './SearchBar.module.scss';
import { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
	const [search, setSearch] = useState('');
	const handleSearch = () => {
		onSearch(search);
	};
	const handleInputChange = ({ target: { value } }) => {
		if (search && !value) {
			onSearch('');
		}
		setSearch(value);
	};
	return (
		<div className={styles.main}>
			<Input
				onChange={handleInputChange}
				name='searchInput'
				placeholderText='Enter course name...'
			/>
			<Button onClick={handleSearch} primary>
				Search
			</Button>
		</div>
	);
};
