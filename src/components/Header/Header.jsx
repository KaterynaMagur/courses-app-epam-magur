import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';

import styles from './Header.module.scss';

const NICK_NAME = 'Kate';

export const Header = () => {
	return (
		<div className={styles.header}>
			<Logo primary />
			<div className={styles.nick}>{NICK_NAME}</div>
			<Button primary>Logout</Button>
		</div>
	);
};
