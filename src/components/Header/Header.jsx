import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';
import styles from './test.module.scss';

export const Header = () => {
	return (
		<div className={styles.header}>
			<Logo primary />
			<div className={styles.nick}>Kate</div>
			<Button primary>Logout</Button>
		</div>
	);
};
