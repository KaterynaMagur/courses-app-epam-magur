import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';

import styles from './test.module.scss';

const NickName = 'Kate';

export const Header = () => {
	return (
		<div className={styles.header}>
			<Logo primary />
			<div className={styles.nick}>{NickName}</div>
			<Button primary>Logout</Button>
		</div>
	);
};
