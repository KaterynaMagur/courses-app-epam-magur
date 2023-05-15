import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';

import styles from './Header.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const nickName = () => {
		if (localStorage.getItem('name')) {
			return localStorage.getItem('name').slice(1, -1);
		}
		return '';
	};

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('name');
		navigate('/login');
	};

	const showLogout =
		location.pathname !== '/login' && location.pathname !== '/registration';

	return (
		<div className={styles.header}>
			<Logo primary />
			{showLogout ? (
				<div className={styles.rightPart}>
					<div className={styles.nick}>{nickName()}</div>
					<Button primary onClick={logout}>
						Logout
					</Button>
				</div>
			) : null}
		</div>
	);
};
