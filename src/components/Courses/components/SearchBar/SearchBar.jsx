import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';
import styles from './SearchBar.module.scss';

export const SearchBar = () => {
	return (
		<div className={styles.main}>
			<Input name='searchInput' placeholderText='Enter course name...' />
			<Button primary>Search</Button>
		</div>
	);
};
